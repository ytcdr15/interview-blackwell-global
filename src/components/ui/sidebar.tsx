'use client';

import { useAppContext } from '@/context/app-context';
import { usePathname } from '@/i18n/navigation';
import { useEffect } from 'react';
import { LocaleSwitcher } from '../locale-switcher';
import styles from './sidebar.module.scss';

export function Sidebar({ children }: Readonly<{ children: React.ReactNode }>) {
  const { isOpen, closeSidebar } = useAppContext();
  const pathname = usePathname();

  useEffect(() => {
    closeSidebar();
  }, [pathname, closeSidebar]);

  return (
    <div className={styles.sidebar} data-open={isOpen}>
      <div className={styles.backdrop} onClick={closeSidebar}></div>
      <aside className={styles.aside}>
        {children}
        <LocaleSwitcher className={styles.locale} />
      </aside>
    </div>
  );
}
