import clsx from 'clsx';
import styles from './annoucement.module.scss';
import { useTranslations } from 'next-intl';

export function Annoucement() {
  const t = useTranslations('annoucement');

  return (
    <div className={clsx(styles.annoucement, 'span')}>
      <p>{t.rich('sample', { link: (chunks) => <a href='#'>{chunks}</a> })}</p>
    </div>
  );
}
