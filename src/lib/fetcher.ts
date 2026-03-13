export const fetcher = async (endpoint: string) => {
  const res = await fetch(endpoint, {
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_MY_API_KEY}`,
    },
    cache: "force-cache",
  });

  return await res.json();
};
export const movieAPI = async () => {
  const searchMovie = await fetch(
    "https:/api.themoviedb.org/3/movie?query=&language=en-US&page=1",
    {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_MY_API_KEY}`,
      },
    },
  );
  const searchResults = await searchMovie.json();

  return { searchResults };
};
