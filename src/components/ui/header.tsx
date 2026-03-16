import styles from './header.module.scss';
import clsx from 'clsx';
import { RegisterButton } from './register-button';
import { CircleUserRound, Menu } from 'lucide-react';
import { PromotionCountdown } from '../promotion-countdown';
import { Annoucement } from '../annoucement';
import Link from 'next/link';
import { Logo } from './logo';

export default function Header() {
  return (
    <div className={clsx(styles.top, 'full-width')}>
      <header className={clsx(styles.header, 'span')}>
        <div className={styles.wrapper}>
          <Logo />
          <div className={styles.countdown}>
            <PromotionCountdown />
          </div>
          <div className={styles.account}>
            <RegisterButton variant='pill' />
            <Link href='/login' className='button-only'>
              <CircleUserRound color='#fff' size={26} />
            </Link>
          </div>
          <div className={styles.menu}>
            <button type='button' className='button-only'>
              <Menu color='#fff' size={26} />
            </button>
          </div>
        </div>
      </header>
      <Annoucement />
    </div>
  );
}
