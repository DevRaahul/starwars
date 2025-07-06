import { baseUrl, baseUrlForFilm } from "@/constants/constant";
import type { IFilmDetails } from "@/constants/filmInterface";
import type { PlanetDetailResponse, IHeroDetails, IPersonInfo } from "@/constants/peopleInterface";

export const createListForView = (planetData: PlanetDetailResponse[], peopleData: IHeroDetails[]): IPersonInfo[] => {
  const arrayList = [];
  for (let i = 0; i < peopleData.length; i++) {
    let obj = {
      planet: planetData[i]?.result?.properties,
      uid: peopleData[i].result.uid,
      ...peopleData[i].result.properties,
    };
    arrayList.push(obj);
  }
  console.log(arrayList);
  return arrayList;
};

export const sortFilmsByCharcters = (data: IFilmDetails[], uid: string): string[] => {
  let film: string[] = [];
  data.forEach(({ properties }: IFilmDetails) => {
    const { characters, title } = properties;
    characters.forEach((str: string) => {
      if (str.replace(baseUrlForFilm, "") === uid) {
        film.push(title);
      }
    });
  });
  return film;
};

export const getPeopleUrl = (pageNum: number): string => {
  return `${baseUrl}people?page=${pageNum}&limit=10`;
};

export const getFilmUrl = (): string => `${baseUrl}films`;
