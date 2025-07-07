import React, { type JSX } from "react";
import { Skeleton } from "../ui/skeleton";
import type { IFilmDetailsComp } from "@/constants/filmInterface";

const FilmDetails: React.FC<IFilmDetailsComp> = ({ films, loading }) => {
  const getFilmList = (): JSX.Element => {
    return (
      <ul className="pl-4 list-disc">
        {films.map((str) => (
          <li key={str}>{str}</li>
        ))}
      </ul>
    );
  };
  return (
    <>
      <p className="text-md font-semibold">Films:</p>
      <div className="grid grid-cols-1 gap-2">{loading ? <Skeleton className="h-4 w-[200px]" /> : getFilmList()}</div>
    </>
  );
};

export default React.memo(FilmDetails);
