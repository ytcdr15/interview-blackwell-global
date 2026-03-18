'use client';

import { ArrowUpCircle } from 'lucide-react';
import { useEffect, useState } from 'react';
import styles from './scroll-to-too-button.module.scss';

export function ScrollToTopButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScrollVisibility = () => {
      if (window.pageYOffset > 400) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScrollVisibility);
    return () => {
      window.removeEventListener('scroll', handleScrollVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    showButton && (
      <button
        type='button'
        className='button-only'
        style={{ position: 'fixed', bottom: '4rem', right: '4rem' }}
        onClick={scrollToTop}
      >
        <ArrowUpCircle size={46} color='#fff' className={styles.button} />
      </button>
    )
  );
}
