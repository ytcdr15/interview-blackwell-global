import clsx from 'clsx';
import styles from './register-button.module.scss';

type Props = {
  text?: string;
  variant?: 'default' | 'pill';
};

export function RegisterButton({
  text = 'Register Now',
  variant = 'default',
}: Props) {
  return (
    <button
      type='button'
      className={clsx('button', styles.button, {
        [styles.pill]: variant === 'pill',
      })}
    >
      {text}
    </button>
  );
}
