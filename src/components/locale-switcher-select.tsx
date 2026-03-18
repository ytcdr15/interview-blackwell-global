'use client';

import { usePathname, useRouter } from '@/i18n/navigation';
import clsx from 'clsx';
import { Locale } from 'next-intl';
import { useParams } from 'next/navigation';
import { ChangeEvent, ComponentPropsWithoutRef, useTransition } from 'react';
import styles from './locale-switcher-select.module.scss';

type Props = ComponentPropsWithoutRef<'select'>;

export function LocaleSwitcherSelect({
  className,
  children,
  defaultValue,
}: Props) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();

  const onChangeSelection = (event: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = event.target.value as Locale;
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        { pathname, params },
        { locale: nextLocale }
      );
    });
  };

  return (
    <select
      name='locale'
      className={clsx(className, styles.select)}
      defaultValue={defaultValue}
      onChange={onChangeSelection}
      disabled={isPending}
    >
      {children}
    </select>
  );
}
