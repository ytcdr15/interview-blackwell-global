import { LoginForm } from '@/components/forms/login-form';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import { redirect } from '@/i18n/navigation';
import styles from './page.module.scss';
import { getLocale } from 'next-intl/server';

export default async function Login() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const locale = await getLocale();

  // if user logged in
  // redirect back to main page
  if (session) {
    redirect({ href: '/', locale });
  }

  return (
    <div className={styles.page}>
      <LoginForm />
    </div>
  );
}
