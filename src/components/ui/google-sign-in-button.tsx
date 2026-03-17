'use client';

import { googleSignInAction } from '@/actions/auth';
import clsx from 'clsx';
import { ComponentPropsWithoutRef, useTransition } from 'react';
import styles from './google-sign-in-button.module.scss';
import { Loading } from './loading';

type Props = {} & ComponentPropsWithoutRef<'button'>;

export function GoogleSignInButton({ className, disabled, children }: Props) {
  const [pending, startTransition] = useTransition();

  const signInWithGoogle = () => {
    startTransition(async () => {
      await googleSignInAction();
    });
  };

  return (
    <button
      type='button'
      className={clsx('button', className, styles.provider)}
      disabled={disabled || pending}
      onClick={signInWithGoogle}
    >
      {pending ? <Loading /> : children}
    </button>
  );
}
