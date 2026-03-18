import { useTranslations } from 'next-intl';
import { CountdownTimer } from './countdown-timer';
import styles from './promotion-countdown.module.scss';

export function PromotionCountdown() {
  const t = useTranslations('promotion');
  const promotionEndDate = new Date('2026-03-31T23:59:59');

  return (
    <div className={styles.promotion}>
      <p className={styles.label}>{t('label')}</p>
      <CountdownTimer countdownDate={promotionEndDate} />
    </div>
  );
}
