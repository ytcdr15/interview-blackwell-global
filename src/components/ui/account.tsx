import { Link } from '@/i18n/navigation';
import { auth } from '@/lib/auth';
import clsx from 'clsx';
import { CircleUserRound } from 'lucide-react';
import { getTranslations } from 'next-intl/server';
import { headers } from 'next/headers';
import { ComponentPropsWithoutRef } from 'react';
import { LocaleSwitcher } from '../locale-switcher';
import styles from './account.module.scss';
import { LogoutButton } from './logout-button';
import { RegisterButton } from './register-button';

type Props = {} & ComponentPropsWithoutRef<'div'>;

export async function Account({ className }: Props) {
  const t = await getTranslations('general');
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return (
    <div className={clsx(className, styles.account)}>
      {session ? (
        <>
          <span className={styles.name}>
            {t('hi-user', { user: session.user.name })}
          </span>
          <LogoutButton className={clsx('button', styles.button)} />
        </>
      ) : (
        <>
          <RegisterButton variant='pill' />
          <Link href='/login' className='button-only'>
            <span className='sr-only'>Login</span>
            <CircleUserRound color='#fff' size={26} />
          </Link>
        </>
      )}
      <LocaleSwitcher />
    </div>
  );
}
