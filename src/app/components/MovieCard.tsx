import Footer from "./Footer";
import { Header } from "./Header";
import { Popular } from "./Popular";
import { TopRated } from "./TopRated";
import { Upcoming } from "./UpcomingMovies";

export const MovieCard = () => {
  return (
    <div>
      <Upcoming />
      <Popular />
      <TopRated />
    </div>
  );
};
