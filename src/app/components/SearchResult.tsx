import { Loader2Icon, ArrowRightIcon } from "lucide-react";

import Link from "next/link";
import { Dispatch, SetStateAction } from "react";
import NoResult from "./NoResult";
type Movie = {
  title: string;
  od: string;
  vote_average: number;
  poster_path: string;
  release_date: string;
  id: number;
};

type SearchResultProps = {
  isLoading: boolean;
  searchValue: string;
  searchedResults: [];
  data: Movie[];
  setSearchValue: Dispatch<SetStateAction<string>>;
};

export const SearchResult = ({
  data,
  isLoading,
  searchedResults,
  searchValue,
  setSearchValue,
}: SearchResultProps) => {
  const handleSeeMore = () => setSearchValue("");

  return (
    <div>
      {isLoading ? (
        <div>
          <Loader2Icon />
        </div>
      ) : searchedResults.length > 0 ? (
        <div className="flex flex-col absolute border rounded-md shadow-md md:w-144.25 w-83.75 bg-red-500 z-10">
          {searchedResults.slice(0, 5).map((movie: Movie, index: number) => {
            return (
              <div
                className=" pt-4 border-b flex justify-center "
                key={movie.id}
              >
                <div className="w-138.25 h-29 flex justify-center gap-x-4">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt=""
                    className="h-25 w-16.75"
                  />
                  <div>
                    <div>
                      <p className="font-semibold">{movie.title}</p>
                      <div className="flex items-center">
                        <p>{movie.vote_average.toFixed(1)}</p>
                        <img src="star.png" alt="" className="w-4 h-4" />
                      </div>
                    </div>
                    <div className="flex justify-between w-113.5 pt-3">
                      <div>{movie.release_date}</div>
                      <Link
                        href={`/movieSeeMore/${movie.id}`}
                        onClick={handleSeeMore}
                      >
                        <button>See More</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          <button className="flex justify-start">
            See all results for "Wicked"
          </button>
        </div>
      ) : (
        <div className="w-144.25 h-23.75 flex justify-center items-center bg-white z-10 absolute top-11 -left-11 border rounded-md shadow-md">
          No results found.
        </div>
      )}
    </div>
  );
};
