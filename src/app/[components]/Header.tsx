import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowUpIcon, Search } from "lucide-react";
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
          <img src="/film.png" alt="" className="w-5 h-5" />
          <Link href="http://localhost:3000">
            <p className="text-indigo-700 font-bold text-base">MovieHub</p>
          </Link>
        </div>
        <div className="md:flex justify-center items-center space-x-3 hidden">
          <div className="flex w-24.25 h-9 border justify-center items-center gap-2 rounded-md">
            <img src="chevron-down.png" alt="" className="h-4 w-4" />
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
              <img src="searchh.png" alt="" />
            </button>
          </div>
          <div className="w-9 h-9 flex border justify-center items-center rounded-md">
            <button>
              <img src="sar.png" alt="" className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
