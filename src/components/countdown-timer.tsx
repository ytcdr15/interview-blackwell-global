'use client';

import styles from './countdown-timer.module.scss';
import { useState, useEffect } from 'react';

type Props = {
  countdownDate: Date | string;
};

export function CountdownTimer({ countdownDate }: Props) {
  const [timer, setTimer] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = new Date(countdownDate).getTime() - now;

      if (distance < 0) {
        clearInterval(interval);
        setTimer({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimer({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    });

    return () => clearInterval(interval);
  }, [countdownDate]);

  // use browser default locale
  const formatNumber = (num: number) =>
    num.toLocaleString(undefined, {
      minimumIntegerDigits: 2,
      useGrouping: false,
    });

  return (
    <div className={styles.timer}>
      <div className={styles.part}>
        <span className={styles.number}>{formatNumber(timer.days)}</span>
        <small className={styles.unit}>Days</small>
      </div>
      <div className={styles.dot} aria-hidden={true}>
        :
      </div>
      <div className={styles.part}>
        <span className={styles.number}>{formatNumber(timer.hours)}</span>
        <small className={styles.unit}>Hours</small>
      </div>
      <div className={styles.dot} aria-hidden={true}>
        :
      </div>
      <div className={styles.part}>
        <span className={styles.number}>{formatNumber(timer.minutes)}</span>
        <small className={styles.unit}>Minutes</small>
      </div>
      <div className={styles.dot} aria-hidden={true}>
        :
      </div>
      <div className={styles.part}>
        <span className={styles.number}>{formatNumber(timer.seconds)}</span>
        <small className={styles.unit}>Seconds</small>
      </div>
    </div>
  );
}
