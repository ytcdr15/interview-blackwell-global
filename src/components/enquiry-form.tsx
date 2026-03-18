import clsx from 'clsx';
import styles from './enquiry-form.module.scss';
import { SectionTitle } from './ui/section-title';
import { useTranslations } from 'next-intl';

export function EnquiryForm() {
  const t = useTranslations('enquiry-form');

  return (
    <section className={clsx(styles.section, 'full-width')}>
      <form action='#enquiry' method='post' className={styles.form}>
        <SectionTitle className={styles.span}>{t('title')}</SectionTitle>
        <label className={styles.label}>
          <span className='sr-only'>{t('name')}</span>
          <input
            type='text'
            name='name'
            className={clsx('input', styles.input)}
            placeholder={t('name')}
            required
          />
        </label>
        <label className={styles.label}>
          <span className='sr-only'>{t('email')}</span>
          <input
            type='email'
            name='email'
            className={clsx('input', styles.input)}
            placeholder={t('email')}
            required
          />
        </label>
        <label className={styles.label}>
          <span className='sr-only'>{t('mobile-no')}</span>
          <input
            type='tel'
            name='mobileNo'
            className={clsx('input', styles.input)}
            placeholder={t('mobile-no')}
            required
          />
        </label>
        <label className={styles.label}>
          <span className='sr-only'>{t('country-residence')}</span>
          <select
            name='countryResidence'
            defaultValue=''
            className={clsx('input', styles.input)}
          >
            <option value='' disabled>
              {t('country-residence')}
            </option>
            <option value='malaysia'>Malaysia</option>
            <option value='vietnam'>Vietnam</option>
            <option value='thailand'>Thailand</option>
            <option value='others'>Others</option>
          </select>
        </label>
        <label className={clsx(styles.label, styles.span)}>
          <span className='sr-only'>{t('enter-message')}</span>
          <textarea
            name='message'
            rows={8}
            className={clsx('input', styles.input)}
            placeholder={t('enter-message')}
          ></textarea>
        </label>
        <button
          type='submit'
          className={clsx(styles.submit, styles.span, 'button')}
        >
          {t('submit')}
        </button>
      </form>
    </section>
  );
}
