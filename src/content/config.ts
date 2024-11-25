import { z, defineCollection } from 'astro:content';

const articleCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        author: z.string(),
        publishDate: z.coerce.date(),
        categories: z.array(z.string()),
    }),
});

// const authorCollection = defineCollection({
//     type: 'content',
//     schema: z.object({
//         title: z.string(),
//         tags: z.array(z.string()),
//         image: z.string().optional(),
//     }),
// });

export const collections = {
    'article': articleCollection,
    // 'authors': authorCollection,
};