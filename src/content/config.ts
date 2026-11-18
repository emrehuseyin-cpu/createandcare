import { defineCollection, z } from 'astro:content';

const newsCollection = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z
      .object({
        title: z.string(),
        date: z.coerce.date(),
        city: z.string(),
        summary: z.string(),
        image: image().optional(),
        imageAlt: z.string().optional(),
        consent: z.boolean().default(false),
      })
      .refine((data) => !data.image || data.consent === true, {
        message:
          'PHOTO CONSENT RULE VIOLATION: News posts with an image MUST have `consent: true` in frontmatter confirming written photo consent.',
        path: ['consent'],
      }),
});

const eventsCollection = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z
      .object({
        title: z.string(),
        date: z.coerce.date(),
        endDate: z.coerce.date().optional(),
        city: z.string(),
        summary: z.string(),
        image: image().optional(),
        imageAlt: z.string().optional(),
        consent: z.boolean().default(false),
      })
      .refine((data) => !data.image || data.consent === true, {
        message:
          'PHOTO CONSENT RULE VIOLATION: Events with an image MUST have `consent: true` in frontmatter confirming written photo consent.',
        path: ['consent'],
      }),
});

const siteCollection = defineCollection({
  type: 'content',
  schema: z.object({
    text: z.string(),
    linkText: z.string().optional(),
    linkHref: z.string().optional(),
    active: z.boolean().default(true),
  }),
});

export const collections = {
  news: newsCollection,
  events: eventsCollection,
  site: siteCollection,
};
