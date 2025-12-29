"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { MovieHome } from "../page";
import { Button } from "@/components/ui/button";

type ScrollProps = {
  movies: MovieHome[];
};

export const Scroll = ({ movies }: ScrollProps) => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <div className="">
      <Carousel
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {movies.map((kino, index) => (
            <CarouselItem key={index}>
              <div className="h-auto pb-5 md:w-full flex justify-center items-center ">
                <div className="md:relative">
                  <div className="md:absolute">
                    <div className="block md:hidden">
                      <img
                        src={`https://image.tmdb.org/t/p/original${kino.backdrop_path}`}
                        alt=""
                      />
                    </div>
                    <div className="flex justify-between md:justify-center flex-col md:items-start md:pl-10 md:pt-70 md:text-white pt-5 pl-5 pr-5 pb-4 ">
                      <div className="">
                        <div className="text-sm">Now Playing</div>
                        <p className="text-xl text-shadow-xs font-semibold md:text-4xl md:font-extrabold">
                          {kino.title}
                        </p>
                      </div>

                      <div className="flex md:text-white">
                        <img
                          src="./star.png"
                          alt=""
                          className="w-7 h-7 pr-1 pb-1.25"
                        />
                        {kino.vote_average.toFixed(1)}/10
                      </div>
                      <div className=" text-xs  md:w-150 md:text-sm md:text-white ">
                        {kino.overview}
                      </div>
                    </div>
                    <div className="md:flex hidden md:absolute left-10">
                      <Button variant="outline" className="shadow-sm">
                        <img src="play.png" alt="" className="h-4 w-4" /> Watch
                        Trailer🎟️
                      </Button>
                    </div>
                    <div className="md:hidden flex items bg-center pl-4">
                      <Button variant="outline" className="shadow-sm">
                        <img src="play.png" alt="" className="h-4 w-4" /> Watch
                        Trailer 😜
                      </Button>
                    </div>
                  </div>

                  <div className="hidden md:block">
                    <img
                      src={`https://image.tmdb.org/t/p/original${kino.backdrop_path}`}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden" />
        <CarouselNext className="hidden" />
      </Carousel>
    </div>
  );
};
