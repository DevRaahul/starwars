import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Separator } from "../ui/separator";
import { getFilmUrl, sortFilmsByCharcters } from "@/utils/utils";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { addFilms } from "@/store/feature/filmSlice";
import type { IFilmData } from "@/constants/filmInterface";
import type { IPersonInfo } from "@/constants/peopleInterface";
import CardHeaderInfo from "./CardHeaderInfo";
import PersonalDetails from "./PersonalDetails";
import FilmDetails from "./FilmDetails";

const PersonInfoContainer = () => {
  const [films, setFilms] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const location = useLocation();
  const person: IPersonInfo = location.state;
  const dispatch = useAppDispatch();
  const { value } = useAppSelector((state) => state.film);

  const getFilms = () => {
    if (value?.length === 0) {
      setLoading(true);
      fetch(getFilmUrl())
        .then((res) => res.json())
        .then((films: IFilmData) => {
          setFilms(films.result);
          dispatch(addFilms(films.result));
        })
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    } else {
      setFilms(value);
    }
  };

  useEffect(() => {
    try {
      getFilms();
    } catch (err) {
      console.log("error in films fetching", err);
    }
  }, []);

  return (
    <Card className="w-full m-4 max-w-sm mx-auto rounded-2xl shadow-md border">
      <CardHeader className="space-y-4">
        <CardHeaderInfo person={person} />
      </CardHeader>
      <CardContent className="text-sm text-gray-700 space-y-3">
        <Separator />
        <PersonalDetails person={person} />
        <Separator />
        <FilmDetails films={sortFilmsByCharcters(films, person.uid)} loading={loading} />
      </CardContent>
    </Card>
  );
};

export default PersonInfoContainer;
