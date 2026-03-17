import clsx from 'clsx';
import { Menu } from 'lucide-react';
import { Annoucement } from '../annoucement';
import { PromotionCountdown } from '../promotion-countdown';
import { Account } from './account';
import styles from './header.module.scss';
import { Logo } from './logo';

export default async function Header() {
  return (
    <div className={clsx(styles.top, 'full-width')}>
      <header className={clsx(styles.header, 'span')}>
        <div className={styles.wrapper}>
          <Logo />
          <div className={styles.countdown}>
            <PromotionCountdown />
          </div>
          <Account className={styles.account} />
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
