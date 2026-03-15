'use client';

import styles from './countdown-timer.module.scss';
import { useState, useEffect } from 'react';
import NumberFlow, { Format } from '@number-flow/react';

type Props = {
  countdownDate: Date | string;
};

export function CountdownTimer({ countdownDate }: Props) {
  const format: Format = { minimumIntegerDigits: 2, useGrouping: false };

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

  return (
    <div className={styles.timer}>
      <div className={styles.part}>
        <NumberFlow
          className={styles.number}
          format={format}
          value={timer.days}
        />
        <small className={styles.unit}>Days</small>
      </div>
      <div className={styles.dot} aria-hidden={true}>
        :
      </div>
      <div className={styles.part}>
        <NumberFlow
          className={styles.number}
          format={format}
          value={timer.hours}
        />
        <small className={styles.unit}>Hours</small>
      </div>
      <div className={styles.dot} aria-hidden={true}>
        :
      </div>
      <div className={styles.part}>
        <NumberFlow
          className={styles.number}
          format={format}
          value={timer.minutes}
        />
        <small className={styles.unit}>Minutes</small>
      </div>
      <div className={styles.dot} aria-hidden={true}>
        :
      </div>
      <div className={styles.part}>
        <NumberFlow
          className={styles.number}
          format={format}
          value={timer.seconds}
        />
        <small className={styles.unit}>Seconds</small>
      </div>
    </div>
  );
}
