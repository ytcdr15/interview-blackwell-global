import Image from 'next/image';
import styles from './choose-us.module.scss';
import clsx from 'clsx';
import { RegisterButton } from './ui/register-button';
import { SectionTitle } from './ui/section-title';
import { useTranslations } from 'next-intl';

export function ChooseUs() {
  const t = useTranslations('choose-us');

  return (
    <section className={clsx(styles.section, 'full-width')}>
      <div className={styles.content}>
        <SectionTitle>{t('title')}</SectionTitle>
        <ul className={styles.reason}>
          <li>
            <Image
              src='/images/icon-1-69b3f0945fa2e.webp'
              className={styles.icon}
              width={84}
              height={84}
              alt='icon-1'
            />
            <h2>{t('r1')}</h2>
            <p>{t('d1')}</p>
          </li>
          <li>
            <Image
              src='/images/icon-2-69b3f0945cfb9.webp'
              className={styles.icon}
              width={84}
              height={84}
              alt='icon-2'
            />
            <h2>{t('r2')}</h2>
            <p>{t('d2')}</p>
          </li>
          <li>
            <Image
              src='/images/icon-3-69b3f093ceda3.webp'
              className={styles.icon}
              width={84}
              height={84}
              alt='icon-3'
            />
            <h2>{t('r3')}</h2>
            <p>{t('d3')}</p>
          </li>
          <li>
            <Image
              src='/images/icon-4-69b3f093ced52.webp'
              className={styles.icon}
              width={84}
              height={84}
              alt='icon-4'
            />
            <h2>{t('r4')}</h2>
            <p>{t('d4')}</p>
          </li>
        </ul>
        <RegisterButton />
      </div>
    </section>
  );
}
