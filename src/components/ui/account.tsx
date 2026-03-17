import { CircleUserRound } from 'lucide-react';
import Link from 'next/link';
import { ComponentPropsWithoutRef } from 'react';
import { RegisterButton } from './register-button';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import { LogoutButton } from './logout-button';
import styles from './account.module.scss';

type Props = {} & ComponentPropsWithoutRef<'div'>;

export async function Account({ className }: Props) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return (
    <div className={className}>
      {session ? (
        <>
          <span className={styles.name}>Hi, {session.user.name}</span>
          <LogoutButton />
        </>
      ) : (
        <>
          <RegisterButton variant='pill' />
          <Link href='/login' className='button-only'>
            <CircleUserRound color='#fff' size={26} />
          </Link>
        </>
      )}
    </div>
  );
}
