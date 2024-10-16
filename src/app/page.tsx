'use client';

import { useEffect, useState } from 'react';
import FilmAPI, { FilmType } from './api/getFilms';
import { Card } from '@/components/shared';
import style from './home.module.scss';

export default function Home() {
  const [films, setFilms] = useState<FilmType[]>([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const page = Math.floor(Math.random() * 100);

    try {
      const data = await FilmAPI.getFilms(page.toString());
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
