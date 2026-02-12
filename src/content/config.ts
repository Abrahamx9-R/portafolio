import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	type: 'content',
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
        tags: z.array(z.string()).optional(),
        // Allow any string for category so the user can add new ones easily
        category: z.string().default('Other'),
        isProject: z.boolean().default(false),
        lang: z.enum(['es', 'en']).default('es'),
	}),
});

export const collections = { blog };
