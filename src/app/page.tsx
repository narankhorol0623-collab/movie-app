import Footer from "./[components]/Footer";
import { Header } from "./[components]/Header";
import { MovieCard } from "./[components]/MovieCard";
import { Scroll } from "./[components]/Scroll";
// import useSWR from "swr";

export type MovieHome = {
  title: string;
  od: string;
  vote_average: number;
  poster_path: string;
  overview: string;
  backdrop_path: string;
};

// function Profile() {
//   const { data, error, isLoading } = useSWR("/api/user");

//   if (error) return <div>failed to load</div>;
//   if (isLoading) return <div>loading...</div>;
//   return <div>hello {data.name}!</div>;
// }

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
  // const movies: Movie[] = await fetchfromUpcoming("upcoming");

  return (
    <div className="w-full m-auto">
      <Scroll movies={data.slice(0, 10)} />
      <MovieCard />
    </div>
  );
};
export default Home;
