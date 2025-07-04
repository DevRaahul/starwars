import { useEffect, useState } from "react";
import type { ICharacterDetails, IHeroDetails, IPeopleApi, IPersonInfo, loadingObj, PlanetDetailResponse } from "@/constants/interface";

export const useFetchPeople = (url: string) => {
  const [peopleList, setpeopleList] = useState<ICharacterDetails[] | IPersonInfo[]>([]);
  const [loading, setLoading] = useState<loadingObj>({ nameLoading: false, detailsLoading: false });
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      setLoading({ nameLoading: true, detailsLoading: true });
      fetchData(url);
    } catch (e) {
      console.log(e);
    }
  }, []);

  const createListForView = (planetData: PlanetDetailResponse[], peopleData: IHeroDetails[]) => {
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
    setLoading({ nameLoading: false, detailsLoading: false });
    setpeopleList([...arrayList]);
  };

  const getHeroDetails = (data: ICharacterDetails[]) => {
    //batch the character details promises
    const batchPromise = data.map((dt: ICharacterDetails) => fetch(dt.url));

    Promise.all([...batchPromise])
      .then((res) => Promise.all(res.map((dt) => dt.json())))
      .then((peopleData: IHeroDetails[]) => {
        // batch planet details promises
        let planetList: any = peopleData.map((dt: IHeroDetails) => {
          return fetch(dt?.result?.properties?.homeworld);
        });
        Promise.all(planetList)
          .then((planetData) => Promise.all(planetData.map((dt) => dt.json())))
          .then((planetRes: PlanetDetailResponse[]) => {
            createListForView(planetRes, peopleData);
          })
          .catch((err) => setError(err));
      })
      .catch((err) => setError(err));
  };

  const fetchData = (url: string) => {
    fetch(url)
      .then((res) => res.json())
      .then((data: IPeopleApi) => {
        //set names first and make call to get person details
        setpeopleList(data.results);
        setLoading((prev) => {
          return {
            ...prev,
            nameLoading: false,
          };
        });
        requestIdleCallback(() => {
          getHeroDetails(data.results);
        });
      })
      .catch((err) => {
        setError(err);
        console.log("Error in fetchData", err);
      });
  };

  return { peopleList, loading, error };
};
