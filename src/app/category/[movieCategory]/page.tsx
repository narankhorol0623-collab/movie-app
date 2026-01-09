import { ArrowLeft, ArrowRight, Ellipsis } from "lucide-react";

export type Movie = {
  title: string;
  od: string;
  vote_average: number;
  poster_path: string;
};

const movieFromTMDB = async (movieCategory: string) => {
  const responseMovies = await fetch(
    `https://api.themoviedb.org/3/movie/${movieCategory}?language=en-US@page=1`,
    {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_MY_API_KEY}`,
      },
    }
  );

  const pageTwoAPIMovies = await responseMovies.json();
  const pageTwoAPIMoviesResults = pageTwoAPIMovies.results;

  return { pageTwoAPIMoviesResults };
};

export default async function Page({
  params,
}: {
  params: Promise<{ movieCategory: string }>;
}) {
  const { movieCategory } = await params;

  const moviesPage2 = await movieFromTMDB(movieCategory);
  const { pageTwoAPIMoviesResults }: { pageTwoAPIMoviesResults: Movie[] } =
    await movieFromTMDB(movieCategory);

  return (
    <div className="pb-20">
      <div className="flex flex-col gap-4 items-center ">
        <div>
          <p className="text-xl font-bold">{movieCategory} movies</p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-4 md:pb-10 pb-4">
          {pageTwoAPIMoviesResults.slice(0, 10).map((info) => {
            return (
              <div
                key={info.title}
                className="md:h-109.75 h-[309.1px] md:w-[229.73px] w-[157.5px] shadow-2xl rounded-lg"
              >
                <img
                  src={`https://image.tmdb.org/t/p/original${info.poster_path}`}
                  alt=""
                  className="rounded-t-lg md:h-85 md:w-[229.73px] h-[233.1px] w-[157.5px]"
                />
                <div className="flex flex-col ">
                  <div className="">
                    <div className="flex items-center gap-1 pl-3 pt-3 font-bold text-sm md:text-xl">
                      <img src="/star.png" alt="" className="h-4 w-4" />
                      {info.vote_average.toFixed(1)}/10
                    </div>
                  </div>
                  <div className="">
                    <div className="text-wrap text-sm md:text-lg pl-3">
                      {info.title}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex gap-8 pb-5">
          <button className="flex items-center gap-2">
            <ArrowLeft />
            <p>Previous</p>
          </button>
          <div className="border flex items-center rounded-lg w-10 h-10">
            <p>1</p>
          </div>
          <div className="border flex items-center rounded-lg w-10 h-10">
            <p>2</p>
          </div>
          <div className="flex items-center">
            <Ellipsis />
          </div>
          <button className="flex items-center gap-2">
            <p>Next</p>
            <ArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}
