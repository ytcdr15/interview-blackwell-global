import clsx from 'clsx';
import styles from './annoucement.module.scss';

export function Annoucement() {
  return (
    <div className={clsx(styles.annoucement, 'span')}>
      <p>
        Notice: Fraudulent Cloned Website and App Download.{' '}
        <a href='#'>Learn More &gt;&gt;</a>
      </p>
    </div>
  );
}
