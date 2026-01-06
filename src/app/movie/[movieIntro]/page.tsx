// import { Home } from "lucide-react";
// import React from "react";
// export type Movie = {
//   title: string;
//   od: string;
//   vote_average: number;
//   poster_path: string;
// };

// const movieFromTMDB = async (movieCategory: string) => {
//   const responseMovies = await fetch(
//     `https://api.themoviedb.org/3/movie/${movieCategory}?language=en-US@page=1`,
//     {
//       headers: {
//         "Content-type": "application/json",
//         Authorization: `Bearer ${process.env.NEXT_PUBLIC_MY_API_KEY}`,
//       },
//     }
//   );

//   const pageTwoAPIMovies = await responseMovies.json();
//   const pageTwoAPIMoviesResults = pageTwoAPIMovies.results;

//   return { pageTwoAPIMoviesResults };
// };

// export default async function page({
//   params,
// }: {
//   params: Promise<{ movieCategory: string }>;
// });

// // const Home = () => {
// //   return <div></div>;
// // };
