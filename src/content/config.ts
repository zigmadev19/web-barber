import { z, defineCollection } from 'astro:content';

const services = defineCollection({
	type: 'data',
	schema: ({image}) =>z.object({
		service : z.string(),
		description : z.string(),
		image : image()
	}),
});

const teams = defineCollection({
	type: 'data',
	schema: ({image}) =>z.object({
		name: z.string(),
		position: z.string(),
		image: image()
	}),
});

const testimonial = defineCollection({
	type: 'data',
	schema: ({image}) =>z.object({
		name: z.string(),
		work: z.string(),
		image: image(),
		quotes: z.string()
	}),
});


export const collections = {
  'teams': teams,
  'testimonials': testimonial,
  'services': services,
};
