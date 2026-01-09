import Link from "next/link";

export type Movie = {
  title: string;
  od: string;
  vote_average: number;
  poster_path: string;
  id: string;
};
type MovieDetail = {
  id: string;
  title: string;
  overview: string;
  poster_path: string;
  vote_average: number;
  release_date: string;
  runtime: number;
};

const movieAPI = async () => {
  const responseUpcoming = await fetch(
    "https://api.themoviedb.org/3/movie/upcoming?language=en-US@",
    {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_MY_API_KEY}`,
      },
    }
  );

  const upcomingMovies = await responseUpcoming.json();
  const upcomingMoviesResults = upcomingMovies.results;

  return { upcomingMoviesResults };
};
export const movieFromTMDB = async (category: string) => {
  const responseMovies = await fetch(
    `https://api.themovieDB.org/3/movie/${category}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_MY_API_KEY}`,
      },
    }
  );
  const pageTwoAPIMovies = await responseMovies.json();
  const pageTwoAPIMoviesResults = pageTwoAPIMovies.results;
  return { pageTwoAPIMovies };
};

export const Upcoming = async () => {
  const { upcomingMoviesResults }: { upcomingMoviesResults: Movie[] } =
    await movieAPI();
  // const { fetchedPage }: { fetchedPage: Movie[] } = await movieAPI();

  return (
    <div className="flex flex-wrap md:w-full justify-center">
      <div className="flex flex-col gap-3">
        <div className="flex justify-evenly gap-20">
          <p className="md:text-2xl text-xl font-semibold text-shadow-lg">
            Upcoming Movies
          </p>
          <Link href="/category/upcoming" className="flex items-center gap-1">
            <button>See more</button>
            <img src="sum.svg" alt="" className="h-4 w-4" />
          </Link>
        </div>
        <div className="flex flex-col gap-8">
          <div className="flex flex-wrap gap-3 justify-center items-center">
            <div className=" flex flex-col md:flex-row gap-3">
              {upcomingMoviesResults
                .map((info) => {
                  return (
                    <Link
                      key={(info.id, info.poster_path)}
                      href={`/movie/${info.id}`}
                      className="bg-[#F4F4F5] rounded-lg cursor-pointer hover:scale-100 flex md:flex-row flex-col  transition"
                    >
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
                          <div className="flex items-center font-semibold gap-1">
                            <img src="./star.png" alt="" className="w-4 h-4" />
                            {info.vote_average.toFixed(1)}/10
                          </div>
                          <p className="text-sm">{info.title}</p>
                        </div>
                      </div>
                    </Link>
                  );
                })
                .slice(0, 5)}
            </div>
            <div className="flex flex-col md:flex-row gap-3">
              {upcomingMoviesResults
                .map((info) => {
                  return (
                    <Link
                      key={info.id}
                      href={`/movie/${info.id}`}
                      className="bg-[#F4F4F5] rounded-lg cursor-pointer hover:scale-105 flex transition"
                    >
                      <div
                        key={info.title}
                        className="md:w-[229.73px] md:h-109.75 h-[309.1px] w-[157.5px] bg-gray-50 shadow-2xl rounded-lg text-sm md:space-x-8 md:space-y-1 "
                      >
                        <img
                          src={`https://image.tmdb.org/t/p/original${info.poster_path}`}
                          alt=""
                          className="h-[233.1px] w-[157.5px] md:h-85 md:w-[229.5px] rounded-t-lg"
                        />
                        <div className="flex flex-col pt-3 pl-1">
                          <div className="flex items-center font-semibold gap-1">
                            <img src="./star.png" alt="" className="w-4 h-4" />
                            {info.vote_average.toFixed(1)}/10
                          </div>
                          <p className="text-sm">{info.title}</p>
                        </div>
                      </div>
                    </Link>
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
