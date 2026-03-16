import { LoginForm } from '@/components/forms/login-form';
import { Modal } from '@/components/ui/modal';
import styles from './page.module.scss';
import Image from 'next/image';

export default function LoginModal() {
  return (
    <Modal>
      <div className={styles.page}>
        <Image
          src='/images/blackwell-global-logo-69b3f245a509a.webp'
          alt='Blackwell Global logo'
          width={200}
          height={45}
          priority
        />
        <LoginForm />
      </div>
    </Modal>
  );
}
