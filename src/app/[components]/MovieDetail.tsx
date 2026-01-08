export type MovieDetail = {
  id: number;
  title: string;
  overview: string;
  poster_path: string | null;
  vote_average: number | null;
  vote_count: number | null;
  release_date: string | null;
  runtime: number | null;
  genres: { id: number; name: string }[];
  videos?: {
    results: { key: string; type: string; site: string; name: string }[];
  };
  similar?: {
    results: {
      id: number;
      title: string;
      poster_path: string | null;
    }[];
  };
};
export async function fetchMovie(movieId: string): Promise<MovieDetail | null> {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?language=en-US&append_to_response=videos,similar`,
      {
        headers: {
          Authorization: `Bearer ${process.env.TDBM_API_KEY}`,
        },
        cache: "no-store",
      }
    );

    if (!res.ok) {
      console.error("TMDB fetch failed:", res.status, await res.text());
      return null;
    }

    const movie: MovieDetail = await res.json();
    return movie;
  } catch (err) {
    console.error("Fetch movie error:", err);
    return null;
  }
}
