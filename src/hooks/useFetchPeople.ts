import { useEffect, useState } from "react";
import type { ICharacterDetails, IHeroDetails, IPeopleApi, IPersonInfo, loadingObj, PlanetDetailResponse } from "@/constants/interface";
import { setNextUrl, setPrevUrl, setPeopleList, setFetchedList } from "@/store/feature/peopleSlice";
import { createListForView } from "@/utils/utils";
import { useAppDispatch, useAppSelector } from "@/store/hooks";

export const useFetchPeople = (url: string) => {
  const [loading, setLoading] = useState<loadingObj>({ nameLoading: false, detailsLoading: false });
  const [error, setError] = useState<string | null>(null);
  const dispatch = useAppDispatch();
  const { fetchedData } = useAppSelector((state) => state.people);

  useEffect(() => {
    debugger;
    if (!fetchedData[url]?.length) {
      try {
        setLoading({ nameLoading: true, detailsLoading: true });
        fetchData(url);
      } catch (e) {
        console.log(e);
      }
    } else {
      dispatch(setPeopleList(fetchedData[url]));
    }
  }, [url]);

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
            const arrayList: IPersonInfo[] = createListForView(planetRes, peopleData);
            setLoading({ nameLoading: false, detailsLoading: false });
            debugger;
            dispatch(setPeopleList(arrayList));
            dispatch(setFetchedList({ data: arrayList, url }));
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
        // dispatch(setNextUrl(data.next));
        // dispatch(setPrevUrl(data.previous));
        console.log("data", data);
        dispatch(setPeopleList(data.results));
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

  return { loading, error };
};
