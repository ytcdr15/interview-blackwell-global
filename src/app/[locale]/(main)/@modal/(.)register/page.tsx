import { RegisterForm } from '@/components/forms/register-form';
import { Modal } from '@/components/ui/modal';
import styles from './page.module.scss';
import Image from 'next/image';

export default function RegisterModal() {
  return (
    <Modal minWidth='100ch'>
      <div className={styles.page}>
        <Image
          src='/images/blackwell-global-logo-69b3f245a509a.webp'
          alt='Blackwell Global logo'
          width={200}
          height={45}
          priority
        />
        <RegisterForm />
      </div>
    </Modal>
  );
}
