import { Link } from '@/i18n/navigation';
import { auth } from '@/lib/auth';
import { getTranslations } from 'next-intl/server';
import { headers } from 'next/headers';
import { ComponentPropsWithoutRef } from 'react';
import { LogoutButton } from './logout-button';
import styles from './side-menu.module.scss';
import clsx from 'clsx';

type Props = {} & ComponentPropsWithoutRef<'div'>;

export async function SideMenu({ className }: Props) {
  const t = await getTranslations('general');
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return (
    <div className={className}>
      {session ? (
        <>
          <nav className={styles.menu}>
            <span className={styles.name}>
              {t('hi-user', { user: session.user.name })}
            </span>
            <LogoutButton className={clsx('button-only', styles.logout)} />
          </nav>
        </>
      ) : (
        <>
          <nav className={styles.menu}>
            <Link href='/register'>Register account</Link>
            <Link href='/login'>Login account</Link>
          </nav>
        </>
      )}
    </div>
  );
}
