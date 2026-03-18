import { routing } from '@/i18n/routing';
import { useLocale } from 'next-intl';
import { LocaleSwitcherSelect } from './locale-switcher-select';
import { ComponentPropsWithoutRef } from 'react';

type Props = ComponentPropsWithoutRef<'select'>;

export function LocaleSwitcher({ className }: Props) {
  const locale = useLocale();

  return (
    <LocaleSwitcherSelect defaultValue={locale} className={className}>
      {routing.locales.map((value) => (
        <option key={value} value={value}>
          {value}
        </option>
      ))}
    </LocaleSwitcherSelect>
  );
}
