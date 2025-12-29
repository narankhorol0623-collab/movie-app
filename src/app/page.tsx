import Footer from "./components/Footer";
import { Header } from "./components/Header";
import { MovieCard } from "./components/MovieCard";
import { Scroll } from "./components/Scroll";

export type MovieHome = {
  title: string;
  od: string;
  vote_average: number;
  poster_path: string;
  overview: string;
  backdrop_path: string;
};
export const fetchfromPopular = async (category: string) => {
  const responce = await fetch(
    `https://api.themovieDB.org/3/movie/${category}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_MY_API_KEY}`,
      },
    }
  );
};
export const fetchfromUpcoming = async (category: string) => {
  const responce = await fetch(
    `https://api.themovieDB.org/3/movie/${category}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_MY_API_KEY}`,
      },
    }
  );
};

export const fetchfromTopRated = async (category: string) => {
  const responce = await fetch(
    `https://api.themovieDB.org/3/movie/${category}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_MY_API_KEY}`,
      },
    }
  );
};

const carouselAPI = async () => {
  const responseNowPlaying = await fetch(
    "https://api.themoviedb.org/3/movie/now_playing?language=en-US@",
    {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_MY_API_KEY}`,
      },
    }
  );

  const nowPlayingMovies = await responseNowPlaying.json();
  const nowPlayingMoviesResults = nowPlayingMovies.results as MovieHome[];

  return { nowPlayingMoviesResults };
};

const Home = async () => {
  const { nowPlayingMoviesResults } = await carouselAPI();

  const data = nowPlayingMoviesResults ?? [];

  return (
    <div className="w-full m-auto">
      <Header />
      <Scroll movies={data.slice(0, 10)} />
      <MovieCard />
      <Footer />
    </div>
  );
};
export default Home;
