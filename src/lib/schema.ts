import * as z from 'zod';

const nonEmpty = (schema: z.ZodString) =>
  schema.nonempty({ error: 'This field cannot be empty' });

const passwordSchema = z
  .string()
  .min(8, 'Password must be at least 8 characters long')
  .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
  .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
  .regex(/\d/, 'Password must contain at least one number');
// .regex(/\W/, 'Password must contain at least one special character');

export const loginFormSchema = z.object({
  email: z.email().nonempty(),
  password: nonEmpty(z.string()),
});

export const registerFormSchema = z
  .object({
    firstName: nonEmpty(z.string()),
    lastName: nonEmpty(z.string()),
    email: z.email().nonempty(),
    mobileNo: nonEmpty(z.string()),
    country: nonEmpty(z.string({ error: 'Please select a value' })),
    password: passwordSchema,
    confirmPassword: passwordSchema,
  })
  .refine((schema) => schema.password === schema.confirmPassword, {
    error: 'Password does not match',
    path: ['confirmPassword'],
  });

export type LoginFormType = z.infer<typeof loginFormSchema>;
export type RegisterFormType = z.infer<typeof registerFormSchema>;
