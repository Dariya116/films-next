import { BASE_URL } from './baseUrl.';
export interface FilmListType {
  films: FilmType[];
}

export interface FilmType {
  id: number;
  name?: string;
  alternativeName: string;
  enName?: string;
  names: Name[];
  type: string;
  typeNumber: number;
  year: number;
  description?: string | null;
  shortDescription?: string | null;
  status?: string | null;
  rating: Rating;
  votes: Rating;
  movieLength: number;
  totalSeriesLength?: number | null;
  seriesLength?: number | null;
  ratingMpaa?: number | null;
  ageRating?: number | null;
  poster: Poster;
  backdrop: Poster;
  genres: Genre[];
  countries: Genre[];
  top10?: boolean | null;
  top250?: boolean | null;
  isSeries: boolean;
  ticketsOnSale: boolean;
}
interface Genre {
  name: string;
}
interface Poster {
  url?: string | null;
  previewUrl?: string | null;
}
interface Rating {
  kp: number;
  imdb: number;
  filmCritics: number;
  russianFilmCritics: number;
  await: number;
}
interface Name {
  name: string;
  language?: string | null;
  type: string;
}

const genreCartoons = '%D0%BC%D1%83%D0%BB%D1%8C%D1%82%D1%84%D0%B8%D0%BB%D1%8C%D0%BC';
const genreThrillers = '%D1%82%D1%80%D0%B8%D0%BB%D0%BB%D0%B5%D1%80';
const genreComedy = '%D0%BA%D0%BE%D0%BC%D0%B5%D0%B4%D0%B8%D1%8F';

const headers = {
  'Content-Type': 'application/json',
  'X-API-KEY': 'AT06YB5-WFTM0QM-MVFEWVQ-XVTVSMY',
  // 'X-API-KEY': 'RNR3YZR-BETMAQN-M9P3FTF-697X7Q6',
};

class FilmAPI {
  /** Получить список фильмов */
  static async getFilms(page: string): Promise<FilmType[]> {
    const res = await fetch(`${BASE_URL}/v1.4/movie?page=${page}&limit=100`, {
      cache: 'no-cache',
      method: 'GET',
      headers,
    });
    const data = await res.json();
    return data.docs;
  }

  /** Получить список мультфильмов */
  static async getCartoons(page: string): Promise<FilmType[]> {
    const res = await fetch(
      `${BASE_URL}/v1.4/movie?page=${page}&limit=100&genres.name=${genreCartoons}`,
      {
        cache: 'no-cache',
        method: 'GET',
        headers,
      },
    );
    const data = await res.json();
    return data.docs;
  }

  /** Получить список триллеров */
  static async getThrillers(page: string): Promise<FilmType[]> {
    const res = await fetch(
      `${BASE_URL}/v1.4/movie?page=${page}&limit=100&genres.name=${genreThrillers}`,
      {
        cache: 'no-cache',
        method: 'GET',
        headers,
      },
    );
    const data = await res.json();
    return data.docs;
  }

  /** Получить список комедий */
  static async getComedy(page: string): Promise<FilmType[]> {
    const res = await fetch(
      `${BASE_URL}/v1.4/movie?page=${page}&limit=100&genres.name=${genreComedy}`,
      {
        cache: 'no-cache',
        method: 'GET',
        headers,
      },
    );
    const data = await res.json();
    return data.docs;
  }

  /** Получить фильм по id */
  static async getFilm(id: string): Promise<FilmType> {
    const res = await fetch(`${BASE_URL}/v1.4/movie/${id}`, {
      cache: 'no-cache',
      method: 'GET',
      headers,
    });
    const data = await res.json();
    return data;
  }
}

export default FilmAPI;
