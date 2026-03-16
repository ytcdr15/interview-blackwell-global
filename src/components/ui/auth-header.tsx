import clsx from 'clsx';
import styles from './auth-header.module.scss';
import { Logo } from './logo';

export function AuthHeader() {
  return (
    <header className={clsx(styles.header, 'full-width')}>
      <div className={styles.wrapper}>
        <Logo />
      </div>
    </header>
  );
}
