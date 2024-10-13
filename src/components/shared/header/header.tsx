'use client'

import { ButtonNav } from '@/components/ui';
import React from 'react';
import style from './header.module.scss';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';

export const Header = () => {
  const router = useRouter();
  const path = usePathname();
  const filmNav = [
    { name: 'Все фильмы', id: 1, href: '/' },
    { name: 'Мультфильмы', id: 2, href: '/cartoon' },
    { name: 'Триллеры', id: 3, href: '/thriller' },
    { name: 'Комедии', id: 4, href: '/comedy' },
  ];

  return (
    <header className={style.header}>
      <Link href={'/'}>
        <h1 className={style.header__title}>Фильмы</h1>
      </Link>
      <nav className={style.header__nav}>
        {filmNav.map((item) => (
          <ButtonNav
            key={item.id}
            text={item.name}
            type={'button'}
            className={
              style.header__nav_button +
              (path === item.href ? ' ' + style.header__nav_button_active : '')
            }
            onClick={() => router.push(item.href)}
          />
        ))}
      </nav>
    </header>
  );
};
