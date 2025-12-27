---
title: "Kill the Boilerplate: Introducing lean_repo"
description: "A boilerplate-killer for caching and network synchronization in Flutter. Supports Stale-While-Revalidate strategies out of the box."
pubDate: 2025-12-27
tags: ["Flutter", "Open Source", "Architecture", "Dart"]
---

As mobile engineers, we spend too much time writing the same data layer boilerplate. Check cache, if empty fetch network, save to cache, update UI... it's exhausting.

In my work efficiently shipping apps at **Irdeto** and **WieLabs**, I noticed that 90% of repositories follow the exact same "Stale-While-Revalidate" pattern.

Enter **`lean_repo`**.

## 📑 Index

* [The Philosophy](#the-philosophy)
* [The Problem](#the-problem)
* [The Solution](#the-solution)
* [Integration Recipes (ObjectBox)](#integration-recipes)
* [Practical Example: Fetching 100 Todos](#practical-example)

---

## The Philosophy

`lean_repo` is built on three systems principles:

1. **Strategy Pattern:** Switch between `StaleWhileRevalidate`, `CacheFirst`, or `NetworkOnly` with a single enum.
2. **Driver Agnostic:** Plug in Hive, SQLite, or SharedPrefs without changing your domain logic.
3. **Type Safety:** Fully generic `<T>` support with zero `dynamic` casting required.

## Installation

Add it to your `pubspec.yaml`:

```yaml
dependencies:
  lean_repo: ^0.0.1
```

## The Problem

In a standard "Clean Architecture" setup, fetching a simple list of items often requires creating an absurd amount of files just to move JSON from point A to point B.

You usually end up with:

1. `TodoModel` (The domain entity)
2. `TodoDTO` (The data transfer object)
3. `TodoRemoteDataSource` (To call the API)
4. `TodoLocalDataSource` (To save to DB)
5. `TodoRepository` (The abstract interface)
6. `TodoRepositoryImpl` (The actual logic glue)

This creates a massive barrier to entry and slows down velocity significantly. It turns a 5-minute task into a 30-minute chore.

## The Solution

With `lean_repo`, you initialize a single `LeanRepository` instance and use it everywhere. You define the *what* (fetch logic), not the *how* (orchestration).

### 1. Initialize

Create your repository with a driver (comes with `InMemoryDriver` for testing):

```dart
// main.dart or your DI container
final repo = LeanRepository(
  cacheDriver: InMemoryDriver(), 
);
```

### 2. Stream Data

Instead of writing a new class, you just call `.stream()`. This automatically handles checking the cache, fetching from the network, and updating the stream.

## Integration Recipes

While `lean_repo` supports generic caching, you often want to use a high-performance database like **ObjectBox** to store your entities.

### ObjectBox & List Handling

When dealing with lists (like fetching all Todos), we need a strategy to map the API response to the database.

**The Strategy:**

1. **Read:** Fetch all entities from ObjectBox, convert them to a list, and wrap them in a JSON object (e.g., `{'items': [...]}`).
2. **Write:** Receive the JSON object, unwrap the list, and perform a "Nuke & Fill" (delete old entries, insert new ones) to ensure the cache stays in sync with the server.

Here is the implementation of the `CacheDriver`:

```dart
class TodoObjectBoxDriver implements CacheDriver {
  final Box<TodoEntity> box;
  TodoObjectBoxDriver(this.box);

  @override
  Future<String?> read(String key) async {
    if (key == 'all_todos_list') {
      // 1. Fetch all entities from the database
      final todos = box.getAll();

      if (todos.isEmpty) return null;

      // 2. Convert Entities back to List<Map>
      final listData = todos
          .map(
            (e) => {
              'id': int.tryParse(e.remoteId.split('_').last) ?? 0,
              'title': e.title,
              'completed': e.completed,
            },
          )
          .toList();

      // 3. Wrap in the "items" map and encode to String
      return jsonEncode({'items': listData});
    }

    return null;
  }

  @override
  Future<void> write(String key, String data, {Duration? ttl}) async {
    if (key == 'all_todos_list') {
      // 1. Parse the "Wrapped" JSON
      final Map<String, dynamic> wrapper = jsonDecode(data);
      final List<dynamic> items = wrapper['items'];

      // 2. Convert JSON objects to Entities
      final newEntities = items
          .map(
            (json) => TodoEntity(
              remoteId: 'todo_${json['id']}',
              title: json['title'],
              completed: json['completed'],
            ),
          )
          .toList();

      // 3. Sync Strategy: Clear old cache and insert new list
      // This ensures we don't have stale items that were deleted on the server.
      box.removeAll();
      box.putMany(newEntities);
    }
  }

  @override
  Future<void> delete(String key) async => box.removeAll();

  @override
  Future<void> clear({String? prefix}) async => box.removeAll();
}
```

## Practical Example

Here is the complete `main.dart` implementation. It fetches 100 Todos from **JSONPlaceholder**, caches them locally using ObjectBox, and displays them in a `ListView`.

Note how we use the `toJson` and `fromJson` serialization hooks to **wrap** and **unwrap** the list, ensuring it satisfies the type requirements.

```dart
import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'package:lean_repo/lean_repo.dart';
import 'package:lean_repo_sample/objectbox.g.dart'; // Generated by ObjectBox

// --- DOMAIN MODEL ---
class Todo {
  final int id;
  final String title;
  final bool completed;

  Todo({required this.id, required this.title, required this.completed});

  factory Todo.fromJson(Map<String, dynamic> json) {
    return Todo(
      id: json['id'],
      title: json['title'],
      completed: json['completed'],
    );
  }

  Map<String, dynamic> toJson() => {
    'id': id,
    'title': title,
    'completed': completed,
  };
}

// --- DATABASE ENTITY ---
@Entity()
class TodoEntity {
  @Id()
  int id = 0;

  @Unique()
  String remoteId; // The ID from the API (e.g., 'todo_1')

  String title;
  bool completed;

  TodoEntity({
    required this.remoteId,
    required this.title,
    required this.completed,
  });
}

// --- MAIN ENTRY POINT ---
void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  final store = await openStore();
  final box = store.box<TodoEntity>();

  final leanRepo = LeanRepository(cacheDriver: TodoObjectBoxDriver(box));

  runApp(
    MaterialApp(home: TodoListScreen(repository: TodoRepository(leanRepo))),
  );
}

// --- REPOSITORY ---
class TodoRepository {
  final LeanRepository _repo;
  TodoRepository(this._repo);

  // FETCH ALL TODOS
  Stream<Resource<List<Todo>>> getTodos() {
    return _repo.stream<List<Todo>>(
      key: 'all_todos_list', // Unique key for this list
      fetch: () async {
        final response = await http.get(
          Uri.parse('https://jsonplaceholder.typicode.com/todos'),
        );
        final List<dynamic> data = jsonDecode(response.body);
        return data.map((e) => Todo.fromJson(e)).toList();
      },
      toJson: (todos) => {'items': todos.map((e) => e.toJson()).toList()},
      fromJson: (json) =>
          (json['items'] as List).map((e) => Todo.fromJson(e)).toList(),
    );
  }
}

// --- UI ---
class TodoListScreen extends StatelessWidget {
  final TodoRepository repository;
  const TodoListScreen({super.key, required this.repository});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Lean Repository: 100 Todos')),
      body: StreamBuilder<Resource<List<Todo>>>(
        stream: repository.getTodos(),
        builder: (context, snapshot) {
          final resource = snapshot.data;

          if (resource == null)
            return const Center(child: CircularProgressIndicator());

          final todos = resource.data ?? [];

          return Column(
            children: [
              // Status Bar
              Container(
                width: double.infinity,
                padding: const EdgeInsets.all(8),
                color: resource.source == SourceType.cache
                    ? Colors.orange[100]
                    : Colors.green[100],
                child: Text(
                  resource.source == SourceType.cache
                      ? "Loaded from Cache (${todos.length} items)"
                      : "Fresh from Network (${todos.length} items)",
                  textAlign: TextAlign.center,
                  style: const TextStyle(fontWeight: FontWeight.bold),
                ),
              ),

              // The List
              Expanded(
                child: ListView.separated(
                  itemCount: todos.length,
                  separatorBuilder: (_, __) => const Divider(height: 1),
                  itemBuilder: (context, index) {
                    final todo = todos[index];
                    return ListTile(
                      leading: CircleAvatar(
                        backgroundColor: todo.completed
                            ? Colors.green[100]
                            : Colors.grey[200],
                        child: Text(todo.id.toString()),
                      ),
                      title: Text(
                        todo.title,
                        maxLines: 1,
                        overflow: TextOverflow.ellipsis,
                        style: TextStyle(
                          decoration: todo.completed
                              ? TextDecoration.lineThrough
                              : null,
                          color: todo.completed ? Colors.grey : Colors.black,
                        ),
                      ),
                    );
                  },
                ),
              ),
            ],
          );
        },
      ),
    );
  }
}
```
