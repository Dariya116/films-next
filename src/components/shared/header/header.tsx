'use client';

import { ButtonNav } from '@/components/ui';
import React, { useEffect, useState } from 'react';
import style from './header.module.scss';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import { BurgerIcon } from '../burger/burger';
import { BurgerNav } from '../burger-nav/burger-nav';

export const filmNav = [
  { name: 'Все фильмы', id: 1, href: '/' },
  { name: 'Мультфильмы', id: 2, href: '/cartoon' },
  { name: 'Триллеры', id: 3, href: '/thriller' },
  { name: 'Комедии', id: 4, href: '/comedy' },
];

export const Header = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [activeBurger, setActiveBurger] = useState(false);
  const router = useRouter();
  const path = usePathname();

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== 'undefined' && window.innerWidth >= 768) {
        setIsDesktop(true);
      } else {
        setIsDesktop(false);
        setActiveBurger(false);
      }
    };

    handleResize(); 

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className={style.header}>
      <Link href={'/'}>
        <h1 className={style.header__title}>Фильмы</h1>
      </Link>
      <div className={style.header__nav}>
        {isDesktop ? (
          <div>
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
          </div>
        ) : (
          <div onClick={() => setActiveBurger(!activeBurger)}>
            <BurgerIcon className={style.burger} activeBurger={activeBurger} />
            <BurgerNav activeBurger={activeBurger} setActiveBurger={setActiveBurger} />
          </div>
        )}
      </div>
    </header>
  );
};
