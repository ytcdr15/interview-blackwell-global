import { LoginForm } from '@/components/forms/login-form';
import styles from './page.module.scss';

export default function Login() {
  return (
    <div className={styles.page}>
      <LoginForm />
    </div>
  );
}
