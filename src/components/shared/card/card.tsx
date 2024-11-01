import { FilmType } from '@/app/api/getFilms';
import React from 'react';
import style from './card.module.scss';
import Link from 'next/link';

export const Card = ({ film }: { film: FilmType }) => {
  return (
    <div className={style.card}>
      <Link className={style.card__link} href={`/film/${film.id}`}>
        <img
          loading="lazy"
          src={film.poster?.previewUrl ? film.poster.previewUrl : ''}
          alt={film.name ? film.name : 'Poster'}
        />
        <h2 className={style.card__title}>{film.name ? film.name : film.alternativeName}</h2>
        <p>{film.year} год</p>
        <p>imdb:{film.rating.imdb}</p>
      </Link>
    </div>
  );
};
