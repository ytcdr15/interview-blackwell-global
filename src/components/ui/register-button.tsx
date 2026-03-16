import clsx from 'clsx';
import styles from './register-button.module.scss';
import { ComponentPropsWithoutRef } from 'react';
import Link from 'next/link';

type Props = ComponentPropsWithoutRef<'button'> & {
  text?: string;
  variant?: 'default' | 'pill';
};

export function RegisterButton({
  text = 'Register Now',
  variant = 'default',
}: Props) {
  return (
    <Link
      href='/register'
      className={clsx('button', styles.button, {
        [styles.pill]: variant === 'pill',
      })}
    >
      {text}
    </Link>
  );
}
