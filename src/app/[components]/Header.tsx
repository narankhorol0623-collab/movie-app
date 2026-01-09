import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MoonStar, Popcorn, Search, SearchCode } from "lucide-react";
import Link from "next/link";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";

export const Header = () => {
  return (
    <div className="h-15 flex md:p-10 p-4 justify-center items-center">
      <div className="flex w-7xl h-9 justify-between items-center">
        <div className="flex space-x-2 justify-center items-center">
          <Popcorn className="text-indigo-700" />
          <Link href="/">
            <p className="text-indigo-700 font-bold text-base md:text-xl">
              MovieHub
            </p>
          </Link>
        </div>
        <div className="md:flex justify-center items-center space-x-3 hidden">
          <div className="flex w-27 h-9 border justify-center items-center gap-2 rounded-md">
            <ArrowLeft />
            <button>Genre</button>
          </div>
          <div className="flex w-94.75">
            <InputGroup>
              <InputGroupInput placeholder="Search..." />
              <InputGroupAddon>
                <Search />
              </InputGroupAddon>
            </InputGroup>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="w-9 h-9 md:hidden flex border justify-center items-center rounded-md">
            <button>
              <SearchCode className="text-gray-400" />
            </button>
          </div>
          <div className="w-9 h-9 flex border justify-center items-center rounded-md">
            <button>
              <MoonStar className="text-gray-400" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
