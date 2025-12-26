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

  return (
    <div className="w-full m-auto">
      <Header />
      <Scroll movies={nowPlayingMoviesResults.slice(0, 5)} />
      <MovieCard />
      <Footer />
    </div>
  );
};

export default Home;
