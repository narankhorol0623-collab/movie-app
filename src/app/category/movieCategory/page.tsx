// import React from "react";
// import { Header } from "../components/Header";
// import { Upcoming } from "../components/UpcomingMovies";
// import { Footer } from "../components/Footer";
// import { Key } from "lucide-react";
export const HomeCategory = () => {
  return (
    <div>
      <div className="flex items-center">
        <img src="sumleft.png" alt="" className="h-4 w-4" />
        <button className="text-gray-400">Previous</button>
        <button>1</button>
        <button>2</button>
        <button>...</button>
        <button>5</button>
        <button>Next</button>
        <img src="sum.svg" alt="" className="h-4 w-4" />
      </div>
    </div>
  );
};
export default HomeCategory;
