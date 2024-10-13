'use client';

import { Card } from '@/components/shared';
import { useEffect, useState } from 'react';
import FilmAPI, { FilmType } from '../api/getFilms';
import style from '../home.module.scss';

export default function Thriller() {
  const [films, setFilms] = useState<FilmType[]>([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const page = Math.floor(Math.random() * 100);

    try {
      const data = await FilmAPI.getThrillers(page.toString());
      setFilms(data);
    } catch (error) {
      console.log('error', error);
    }
  }

  return (
    <>
      <div className={style.content}>
        {films
          ? films
              .filter((film: FilmType) => film.poster?.previewUrl !== null)
              .map((film: FilmType) => <Card film={film} key={film.id} />)
          : 'LOADING'}
      </div>
    </>
  );
}
