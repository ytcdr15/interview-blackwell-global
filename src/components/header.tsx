import Image from 'next/image';
import styles from './header.module.scss';
import clsx from 'clsx';
import { RegisterButton } from './register-button';
import { SquareUserRound } from 'lucide-react';
import { PromotionCountdown } from './promotion-countdown';

export default function Header() {
  return (
    <header className={clsx(styles.header, 'full-width')}>
      <div className={styles.wrapper}>
        <Image
          src='/images/blackwell-global-logo-69b3f245a509a.webp'
          alt='Blackwell Global logo'
          width={200}
          height={45}
          priority
        />
        <PromotionCountdown />
        <div className={styles.account}>
          <RegisterButton variant='pill' />
          <button type='button' className='button-only'>
            <SquareUserRound color='#fff' size={26} />
          </button>
        </div>
      </div>
    </header>
  );
}
