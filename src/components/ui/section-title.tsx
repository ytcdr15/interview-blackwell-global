import { ComponentPropsWithoutRef, PropsWithChildren } from 'react';
import styles from './section-title.module.scss';
import clsx from 'clsx';

type Props = PropsWithChildren<ComponentPropsWithoutRef<'h1'>>;

export function SectionTitle({ children, className }: Props) {
  return <h1 className={clsx(className, styles.h1)}>{children}</h1>;
}
