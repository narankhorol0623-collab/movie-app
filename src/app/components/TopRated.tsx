import Link from "next/link";

export type Movie = {
  title: string;
  od: string;
  vote_average: number;
  poster_path: string;
};

const movieAPI = async () => {
  const responseTopRated = await fetch(
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US@",
    {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_MY_API_KEY}`,
      },
    }
  );

  const topRatedMovies = await responseTopRated.json();
  const topRatedMoviesResults = topRatedMovies.results;

  return { topRatedMoviesResults };
};

export const TopRated = async () => {
  const { topRatedMoviesResults }: { topRatedMoviesResults: Movie[] } =
    await movieAPI();
  return (
    <div className="flex flex-wrap w-full justify-center md:space-x-8 md:pt-10 pb-5">
      <div className="flex flex-col gap-3">
        <div className="flex gap-20 pt-3 justify-evenly">
          <p className="md:text-2xl text-xl text-shadow-lg font-semibold">
            Top Rated
          </p>
          <Link
            href={"../component/topRated"}
            className="flex items-center gap-1"
          >
            <button>See more</button>
            <img src="sum.svg" alt="" className="h-4 w-4" />
          </Link>
        </div>
        <div className="flex flex-col gap-8">
          <div className="flex flex-wrap gap-3 justify-center items-center">
            <div className=" flex flex-col md:flex-row gap-3">
              {topRatedMoviesResults
                .map((info) => {
                  return (
                    <div
                      key={info.title}
                      className="md:w-[229.73px] md:h-109.75 h-[309.1px] w-[157.5px] bg-gray-50 shadow-2xl rounded-lg text-sm md:space-x-8 md:space-y-1"
                    >
                      <img
                        src={`https://image.tmdb.org/t/p/original${info.poster_path}`}
                        alt=""
                        className="h-[233.1px] w-[157.5px] md:h-85 md:w-[229.5px] rounded-t-lg"
                      />
                      <div className="flex flex-col pt-3 pl-1">
                        <div className="flex items-center font-bold">
                          <img src="./star.png" alt="" className="w-4 h-4" />
                          {info.vote_average.toFixed(1)}/10
                        </div>
                        <p className="text-sm">{info.title}</p>
                      </div>
                    </div>
                  );
                })
                .slice(0, 5)}
            </div>
            <div className="flex flex-col md:flex-row gap-3">
              {topRatedMoviesResults
                .map((info) => {
                  return (
                    <div
                      key={info.title}
                      className="md:w-[229.73px] md:h-109.75 h-[309.1px] w-[157.5px] bg-gray-50 shadow-2xl rounded-lg text-sm md:space-x-8 md:space-y-1"
                    >
                      <img
                        src={`https://image.tmdb.org/t/p/original${info.poster_path}`}
                        alt=""
                        className="h-[233.1px] w-[157.5px] md:h-85 md:w-[229.5px] rounded-t-lg"
                      />
                      <div className="flex flex-col pt-3 pl-1">
                        <p className="flex items-center font-bold">
                          <img src="./star.png" alt="" className="w-4 h-4" />
                          {info.vote_average.toFixed(1)}/10
                        </p>
                        <p className="text-sm">{info.title}</p>
                      </div>
                    </div>
                  );
                })
                .slice(5, 10)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
