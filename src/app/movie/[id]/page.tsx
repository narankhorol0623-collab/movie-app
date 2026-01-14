// import Link from "next/link"

import { Cast, Clapperboard, MessageSquare } from "lucide-react";

// import
type MovieDetail = {
  id: string;
  title: string;
  overview: string;
  poster_path: string;
  vote_average: number;
  release_date: string;
  runtime: number;
  backdrop_path: string;
};
type SimilarMovie = {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  vote_avarage: number;
};
type Casts = {
  id: number;
  name: string;
  character: string;
  profile_path: string | null;
  genres: string;
};
const genres = ["Fairy Tale", "Pop Musical", "Fantasy", "Musical", "Romance"];
export async function fetchFromTMDB(movieId: string) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
    {
      headers: {
        Authorization: `Bearer ${process.env.TDBM_API_KEY}`,
      },
      cache: "no-store",
    }
  );
  const movieDetail = await res.json();
  return movieDetail;
}
export async function fetchSimilarMovie(id: number) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
    {
      headers: {
        Authorization: `Bearer ${process.env.TDBM_API_KEY}`,
      },
      cache: "no-store",
    }
  );
  const data = await res.json();
  return data.SimilarMovie;
}
export async function fetchCast(id: number) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
    {
      headers: {
        Authorization: `Bearer ${process.env.TDBM_API_KEY}`,
      },
      cache: "no-store",
    }
  );
  const data = await res.json();

  return data;
}
export default async function MovieDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const movie: MovieDetail = await fetchFromTMDB(id);
  const cast: Casts = await fetchFromTMDB(id);
  const similar: SimilarMovie = await fetchFromTMDB(id);

  return (
    <div className="">
      <div className="">
        <div className="flex gap-3">
          <img
            className="rounded-lg md:w-72.5 md:h-107 h-37 w-25"
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                : "/placeholder.png"
            }
            alt={movie.title}
          />
          <img
            className="h-107 w-190"
            src={
              movie.backdrop_path
                ? `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`
                : "/placeholder.png"
            }
            alt={movie.backdrop_path}
          />
        </div>

        <div className="flex flex-col justify-evenly">
          <div className="md:font-extrabold md:text-4xl font-bold flex items-center gap-2 text-lg ">
            <Clapperboard className="h-6 w-6" /> {movie.title}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <MessageSquare className="w-6 h-6 text-gray-400" />
              <div className="md:text-red-400 md:text-2xl font-bold">
                Movie overview
              </div>
            </div>
            <div className="md:text-xl text-sm">{movie.overview}</div>
          </div>
          <div className="flex flex-col gap-5 font-bold text-gray-400">
            <div className="flex items-center gap-2">
              ⭐ "
              {movie.vote_average !== undefined && movie.vote_average !== null
                ? movie.vote_average.toFixed(1)
                : "N/A"}
              " / 10
            </div>
            <div className="">📅 {movie.release_date}</div>
            <div className="">⏱ {movie.runtime} min</div>
          </div>
        </div>
      </div>
      <div>{}</div>
      {/* <div>{Cast.genres}</div> */}
      <div className="md:text-3xl">
        <p>More like this</p>
      </div>
    </div>
  );
}
