'use server';

import { auth } from '@/lib/auth';
import {
  loginFormSchema,
  LoginFormType,
  registerFormSchema,
  RegisterFormType,
} from '@/lib/schema';
import { APIError } from 'better-auth';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import * as z from 'zod';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
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

  try {
    // sign in user
    await auth.api.signInEmail({
      body: {
        email: validation.data.email,
        password: validation.data.password,
      },
    });
  } catch (error) {
    // handle sign in exceptions
    if (error instanceof APIError) {
      return {
        message: error.message,
        values: {
          email: email ? String(email) : undefined,
        },
      };
    } else {
      return {
        message: 'An unexpected error occured. Please try again later.',
        values: {
          email: email ? String(email) : undefined,
        },
      };
    }
  }

  // redirect to main page
  redirect('/');
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

  try {
    // sign up user
    await auth.api.signUpEmail({
      body: {
        email: validation.data.email,
        password: validation.data.password,
        name: `${validation.data.firstName} ${validation.data.lastName}`,
        firstName: validation.data.firstName,
        lastName: validation.data.lastName,
        mobileNo: validation.data.mobileNo,
        country: validation.data.country,
      },
    });
  } catch (error) {
    // handle sign up exceptions
    if (error instanceof APIError) {
      return {
        message: error.message,
        values: {
          firstName: validation.data.firstName,
          lastName: validation.data.lastName,
          mobileNo: validation.data.mobileNo,
          country: validation.data.country,
        },
      };
    } else {
      return {
        message: 'An unexpected error occured. Please try again later.',
        values: {
          firstName: validation.data.firstName,
          lastName: validation.data.lastName,
          mobileNo: validation.data.mobileNo,
          country: validation.data.country,
        },
      };
    }
  }

  return {
    valid: true,
    // expose firstname to ui
    values: {
      firstName: validation.data.firstName,
    },
  };
}

export async function logoutAction() {
  await auth.api.signOut({
    headers: await headers(),
  });

  // after success
  // redirect to main page
  redirect('/');
}

export async function googleSignInAction() {
  const response = await auth.api.signInSocial({
    body: {
      provider: 'google',
    },
  });

  // redirect to google sign in propmt
  if (response.redirect && response.url) {
    redirect(response.url);
  }

  // otherwise
  // redirect to main page
  redirect('/');
}
