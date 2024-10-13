import React from 'react';
import style from './burger.module.scss';

interface IProps {
  className?: string;
  activeBurger: boolean;
}

export const BurgerIcon = ({ className, activeBurger }: IProps) => {
  return (
    <svg
      className={style.svg + ' ' + className + ' ' + (activeBurger ? style.active : '')}
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1">
      <path d="M0,0.5 L20,0.5 M0,9 L20,9 M0,18 L20,18" />
    </svg>
  );
};
