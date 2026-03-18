import clsx from 'clsx';
import styles from './register-button.module.scss';
import { ComponentPropsWithoutRef } from 'react';
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';

type Props = ComponentPropsWithoutRef<'button'> & {
  text?: string;
  variant?: 'default' | 'pill';
};

export function RegisterButton({
  text = 'register-now',
  variant = 'default',
}: Props) {
  const t = useTranslations('general');

  return (
    <Link
      href='/register'
      className={clsx('button', styles.button, {
        [styles.pill]: variant === 'pill',
      })}
    >
      {t(text)}
    </Link>
  );
}
