import { z } from "zod";

export const VSLogin = z.object({
  email: z
    .string({
      required_error: "Email cannot be empty",
    })
    .email({ message: "Email is not valid" }),
  password: z
    .string({
      required_error: "Password cannot be empty",
    })
    .min(6, { message: "Password must be at least 6 characters" }),
  remember: z.boolean().optional(),
});

export type TVSLogin = z.infer<typeof VSLogin>;
