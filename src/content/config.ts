import { z, defineCollection } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content', 
  schema: z.object({
    title: z.string(),
    date: z.string(),
    desc: z.string(),
    image: z.object({
      src: z.string(),
    }),
})
});
const infoCollection = defineCollection({
  type: 'content', 
  schema: z.object({
    title: z.string(),
    date: z.string(),
    category: z.string(),
    categoryIcon: z.string().optional(),
})
});
const accessCollection = defineCollection({
  type: 'data',
    schema: z.object({ /* ... */ }),
});

export const collections = {
    'blog': blogCollection,
    'info': infoCollection,
    'access': accessCollection,
};