'use client';

import { useEffect, useState } from 'react';
import style from './film.module.scss';
import FilmAPI, { FilmType } from '@/app/api/getFilms';
import Image from 'next/image';

interface IProp {
  params: {
    id: number;
  };
}
export default function Film({ params: { id } }: IProp) {
  const [filmInformation, setFilmInformation] = useState<FilmType>();

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      const data = await FilmAPI.getFilm(id.toString());
      setFilmInformation(data);
    } catch (error) {
      console.log('error', error);
    }
  }

  return (
    <div className={style.content}>
      <Image
        src={filmInformation?.poster?.previewUrl ? filmInformation.poster.previewUrl : ''}
        alt={filmInformation?.name ? filmInformation.name : 'Poster'}
        width={300}
        height={500}
        onLoad={() => console.log('loaded')}
      />
      <div className={style.content__information}>
        <h2>{filmInformation?.name}</h2>
        <p>{filmInformation?.year} год</p>
        <p>
          <b>Рейтинг imdb:</b> {filmInformation?.rating.imdb}
        </p>
        <p>
          <b>Описание:</b> {filmInformation?.description}
        </p>
      </div>
    </div>
  );
}
