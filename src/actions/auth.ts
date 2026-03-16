'use server';

import {
  loginFormSchema,
  LoginFormType,
  registerFormSchema,
  RegisterFormType,
} from '@/lib/schema';
import * as z from 'zod';

type BaseActionState<T extends Record<string, any>> = {
  values?: Partial<Record<keyof T, string | undefined>>;
  errors?: Partial<Record<keyof T, string[] | undefined>>;
  message?: string;
  valid?: boolean;
};

export type LoginActionState = BaseActionState<LoginFormType>;

export async function loginAction(
  _: LoginActionState,
  formData: FormData
): Promise<LoginActionState> {
  // validate form fields
  const email = formData.get('email');
  const validation = loginFormSchema.safeParse({
    email,
    password: formData.get('password'),
  });

  if (!validation.success) {
    return {
      errors: z.flattenError(validation.error).fieldErrors,
      values: {
        email: email ? String(email) : undefined,
      },
    };
  }

  return { valid: true };
}

export type RegisterActionState = BaseActionState<RegisterFormType>;

export async function registerAction(
  _: RegisterActionState,
  formData: FormData
): Promise<RegisterActionState> {
  // validate form fields
  const firstName = formData.get('firstName');
  const lastName = formData.get('lastName');
  const email = formData.get('email');
  const mobileNo = formData.get('mobile');
  const country = formData.get('country');
  const password = formData.get('password');
  const confirmPassword = formData.get('confirmPassword');
  const validation = registerFormSchema.safeParse({
    firstName,
    lastName,
    email,
    mobileNo,
    country,
    password,
    confirmPassword,
  });

  if (!validation.success) {
    return {
      errors: z.flattenError(validation.error).fieldErrors,
      values: {
        firstName: firstName ? String(firstName) : undefined,
        lastName: lastName ? String(lastName) : undefined,
        email: email ? String(email) : undefined,
        mobileNo: mobileNo ? String(mobileNo) : undefined,
        country: country ? String(country) : undefined,
        password: password ? String(password) : undefined,
        confirmPassword: confirmPassword ? String(confirmPassword) : undefined,
      },
    };
  }

  return { valid: true };
}
