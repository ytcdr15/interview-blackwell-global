'use client';

import { logoutAction } from '@/actions/auth';
import { ComponentPropsWithoutRef, useActionState } from 'react';
import { Loading } from './loading';

type Props = ComponentPropsWithoutRef<'button'>;

export function LogoutButton({ className }: Props) {
  const [, formAction, submitting] = useActionState(logoutAction, null);

  return (
    <form action={formAction}>
      <button type='submit' className={className} disabled={submitting}>
        {submitting ? <Loading /> : 'Logout'}
      </button>
    </form>
  );
}
