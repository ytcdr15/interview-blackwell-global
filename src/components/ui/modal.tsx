'use client';

import {
  ComponentPropsWithoutRef,
  ComponentRef,
  useEffect,
  useRef,
  CSSProperties,
  useMemo,
} from 'react';
import { X } from 'lucide-react';
import styles from './modal.module.scss';
import clsx from 'clsx';
import { useRouter } from 'next/navigation';

type Props = {
  title?: string;
  minWidth?: string;
} & ComponentPropsWithoutRef<'dialog'>;

export function Modal({ title, minWidth, className, children }: Props) {
  const router = useRouter();
  const dialogRef = useRef<ComponentRef<'dialog'>>(null);

  const cssStyles: CSSProperties = useMemo(
    () => ({
      '--bg-color': 'var(--c-header)',
      '--bor-color': 'var(--c-white)',
      '--min-width': minWidth || '',
      color: 'var(--c-white)',
    }),
    [minWidth]
  );
  const notSupportLightDismiss = useMemo(
    () => !('closedBy' in HTMLDialogElement.prototype),
    []
  );
  const showHeader = useMemo(() => title || notSupportLightDismiss, [title]);

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
    }
  }, []);

  const onClose = () => {
    router.back();
  };

  return (
    <dialog
      ref={dialogRef}
      style={cssStyles}
      className={clsx(className, styles.dialog)}
      onClose={onClose}
      // light dismiss
      closedby='any'
    >
      {showHeader && (
        <header>
          <h1>{title}</h1>
          {notSupportLightDismiss && (
            <button
              type='button'
              className='button-only close'
              onClick={onClose}
            >
              <X size={32} />
              <span className='sr-only'>Close</span>
            </button>
          )}
        </header>
      )}
      {children}
    </dialog>
  );
}
