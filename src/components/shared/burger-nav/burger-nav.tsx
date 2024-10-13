'use client';

import React, { Dispatch, SetStateAction } from 'react';
import style from './burger-nav.module.scss';
import { filmNav } from '@/components/shared/header/header';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface IProps {
  activeBurger: boolean;
  setActiveBurger: Dispatch<SetStateAction<boolean>>;
}
export const BurgerNav = ({ activeBurger, setActiveBurger }: IProps) => {
  const path = usePathname();

  return (
    <div className={!activeBurger ? style.links : style.links + ' ' + style.active}>
      <nav className={style.nav}>
        {filmNav.map((filmNav) => (
          <Link key={filmNav.id} href={filmNav.href} onClick={() => setActiveBurger(false)}>
            <h2 className={path === filmNav.href ? `${style.nav__active}` : ''}>{filmNav.name}</h2>
          </Link>
        ))}
      </nav>
    </div>
  );
};