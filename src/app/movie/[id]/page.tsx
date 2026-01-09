// import Link from "next/link"
// import
type MovieDetail = {
  id: string;
  title: string;
  overview: string;
  poster_path: string;
  vote_average: number;
  release_date: string;
  runtime: number;
};
type SimilarMovie = {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  vote_avarage: number;
};
type Cast = {
  id: number;
  name: string;
  character: string;
  profile_path: string | null;
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
export async function fetchSimilarMovie(id: string) {
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
export async function fetchCast(id: string) {
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

  return data.Cast;
}
export default async function MovieDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const movie: MovieDetail = await fetchFromTMDB(id);
  return (
    <div className="p-5 md:pr-10">
      <div className="flex md:flex-row flex-col gap-8">
        <img
          className="rounded-lg md:w-75 md:h-112.5 h-37 w-25"
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
              : "/placeholder.png"
          }
          alt={movie.title}
        />

        <div className="flex flex-col justify-evenly">
          <div className="md:font-extrabold md:text-4xl font-bold text-lg ">
            🎟️ {movie.title}
          </div>
          <div>
            <div className="md:text-red-400 md:text-2xl font-bold">
              Movie overview
            </div>
            <div className="md:text-xl text-sm">{movie.overview}</div>
          </div>
          <div className="flex flex-col gap-5 font-bold text-gray-400">
            <div className="flex items-center gap-2">
              ⭐ '
              {movie.vote_average !== undefined && movie.vote_average !== null
                ? movie.vote_average.toFixed(1)
                : "N/A"}
              / 10'
            </div>
            <div className="">📅 {movie.release_date}</div>
            <div className="">⏱ {movie.runtime} min</div>
          </div>
        </div>
      </div>
      <div className="md:text-3xl">
        <p>More like this</p>
      </div>
    </div>
  );
}
