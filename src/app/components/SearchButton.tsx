"use client";
import useSWR from "swr";
import { ChangeEvent, useCallback, useState } from "react";
import { Search } from "lucide-react";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { SearchResult } from "./SearchResult";
import { fetcher } from "@/lib/fetcher";

export const SearchButton = () => {
  const [searchValue, setSearchValue] = useState("");

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      console.log(name, value);
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams],
  );

  const { data, isLoading, error } = useSWR(
    searchValue
      ? `${process.env.NEXT_PUBLIC_MY_API_URL}/search/movie?query=${searchValue}&language=en-US&page=1`
      : null,
    fetcher,
  );

  const searchedResults = data?.results || [];

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
    router.push(
      pathname + "?" + createQueryString("query", event.target.value),
    );
  };

  return (
    <InputGroup className="w-94.75 h-9 border relative rounded-md px-2">
      <InputGroupInput
        onChange={handleChange}
        className="relative"
        placeholder="Search..."
        value={searchValue}
      />

      {searchValue && (
        <SearchResult
          setSearchValue={setSearchValue}
          data={searchedResults}
          isLoading={isLoading}
          searchedResults={searchedResults}
          searchValue={searchValue}
        />
      )}
      <InputGroupAddon>
        {isLoading}
        <Search />
      </InputGroupAddon>
    </InputGroup>
  );
};
