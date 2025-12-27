import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
    type: 'content',
    // Type-safety for your frontmatter
    schema: z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.coerce.date(),
        tags: z.array(z.string()).optional(),
        image: z.string().optional(), // For open graph images later
    }),
});

export const collections = { blog };