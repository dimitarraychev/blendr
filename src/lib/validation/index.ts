import { z } from "zod";

export const SignUpValidation = z.object({
	name: z
		.string()
		.min(2, { message: "Should be at least 2 characters." })
		.max(50, { message: "Over the limit of 50 characters." }),
	username: z
		.string()
		.min(2, { message: "Should be at least 2 characters." })
		.max(50, { message: "Over the limit of 50 characters." }),
	email: z.string().email({ message: "Should be a valid email address." }),
	password: z
		.string()
		.min(8, { message: "Should be at least 8 characters." }),
});

export const SignInValidation = z.object({
	email: z.string().email({ message: "Should be a valid email address." }),
	password: z
		.string()
		.min(8, { message: "Should be at least 8 characters." }),
});

export const PostValidation = z.object({
	caption: z
		.string()
		.min(5, { message: "Should be at least 5 characters." })
		.max(2200, { message: "Over the limit of 2200 characters." }),
	file: z.custom<File[]>(),
	location: z
		.string()
		.min(2, { message: "Should be at least 2 characters." })
		.max(100, { message: "Over the limit of 100 characters." }),
	tags: z.string(),
});
