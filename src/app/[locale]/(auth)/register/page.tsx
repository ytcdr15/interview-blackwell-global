import { RegisterForm } from '@/components/forms/register-form';
import styles from './page.module.scss';

export default function Register() {
  return (
    <div className={styles.page}>
      <RegisterForm />
    </div>
  );
}
