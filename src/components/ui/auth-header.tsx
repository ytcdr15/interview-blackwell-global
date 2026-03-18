import clsx from 'clsx';
import styles from './auth-header.module.scss';
import { Logo } from './logo';
import { LocaleSwitcher } from '../locale-switcher';

export function AuthHeader() {
  return (
    <header className={clsx(styles.header, 'full-width')}>
      <div className={styles.wrapper}>
        <Logo />
        <LocaleSwitcher />
      </div>
    </header>
  );
}
