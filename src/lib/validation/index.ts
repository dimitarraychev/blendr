import { z } from "zod";

export const signUpValidation = z.object({
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

export const signInValidation = z.object({
	email: z.string().email({ message: "Should be a valid email address." }),
	password: z
		.string()
		.min(8, { message: "Should be at least 8 characters." }),
});
