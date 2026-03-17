'use client';

import { logoutAction } from '@/actions/auth';
import { useActionState } from 'react';
import styles from './login-button.module.scss';
import clsx from 'clsx';
import { Loading } from './loading';

export function LogoutButton() {
  const [, formAction, submitting] = useActionState(logoutAction, null);

  return (
    <form action={formAction}>
      <button
        type='submit'
        className={clsx('button', styles.button)}
        disabled={submitting}
      >
        {submitting ? <Loading /> : 'Logout'}
      </button>
    </form>
  );
}
