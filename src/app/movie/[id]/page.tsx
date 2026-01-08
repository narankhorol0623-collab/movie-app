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
    <div className="max-w-5xl mx-auto px-4">
      <div className="flex gap-8 p-20">
        <img
          className="rounded-lg md:w-75 md:h-112.5 h-37 w-25"
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
              : "/placeholder.png"
          }
          alt={movie.title}
        />

        <div className="md:col-span-2">
          <h1 className="text-3xl font-bold mb-4">{movie.title}</h1>
          <p className="text-gray-600 mb-4">{movie.overview}</p>
          <p className="mb-2">
            ⭐
            {movie.vote_average !== undefined && movie.vote_average !== null
              ? movie.vote_average.toFixed(1)
              : "N/A"}
            / 10
          </p>
          <p className="mb-2">📅 {movie.release_date}</p>
          <p className="mb-2">⏱ {movie.runtime} min</p>
        </div>
      </div>
    </div>
  );
}
