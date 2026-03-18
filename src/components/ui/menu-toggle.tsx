'use client';

import { useAppContext } from '@/context/app-context';
import { Menu } from 'lucide-react';
import { ComponentPropsWithoutRef } from 'react';

type Props = ComponentPropsWithoutRef<'div'>;

export function MenuToggle({ className }: Props) {
  const { toggleSidebar } = useAppContext();

  return (
    <div className={className}>
      <button type='button' className='button-only' onClick={toggleSidebar}>
        <Menu color='#fff' size={26} />
      </button>
    </div>
  );
}
