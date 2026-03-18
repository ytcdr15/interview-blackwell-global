import clsx from 'clsx';
import { Annoucement } from '../annoucement';
import { PromotionCountdown } from '../promotion-countdown';
import { Account } from './account';
import styles from './header.module.scss';
import { Logo } from './logo';
import { MenuToggle } from './menu-toggle';

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
          <MenuToggle className={styles.menu} />
        </div>
      </header>
      <Annoucement />
    </div>
  );
}
