import { baseUrl } from "@/constants/constant";
import type { PlanetDetailResponse, IHeroDetails, IPersonInfo } from "@/constants/interface";

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

export const getApiUrl = (pageNum: number): string => {
  return `${baseUrl}?page=${pageNum}&limit=10`;
};
