import { LoginForm } from '@/components/forms/login-form';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import styles from './page.module.scss';

export default async function Login() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  // if user logged in
  // redirect back to main page
  if (session) {
    redirect('/');
  }

  return (
    <div className={styles.page}>
      <LoginForm />
    </div>
  );
}
