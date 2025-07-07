import { useEffect, useState } from "react";
import type { ICharacterDetails, IHeroDetails, IPeopleApi, IPersonInfo, loadingObj, PlanetDetailResponse } from "@/constants/peopleInterface";
import { setPeopleList, setFetchedList, setSearchedList, setPageInfo } from "@/store/feature/peopleSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { getPeopleUrl, createListForView } from "../utils/utils";

export const useFetchPeople = (pageNum: number) => {
  // const [totalPage, setTotalPage] = useState<number>(0);
  const [loading, setLoading] = useState<loadingObj>({ nameLoading: false, detailsLoading: false });
  const [error, setError] = useState<string | null>(null);
  const dispatch = useAppDispatch();
  const { fetchedData } = useAppSelector((state) => state.people);

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
            dispatch(setPeopleList(arrayList));
            dispatch(setSearchedList(arrayList));
            dispatch(setFetchedList({ data: arrayList, page: pageNum }));
          })
          .catch((err) => setError(err));
      })
      .catch((err) => setError(err));
  };

  const fetchData = (url: string) => {
    fetch(url)
      .then((res) => res.json())
      .then((data: IPeopleApi) => {
        // setTotalPage(data.total_pages);
        dispatch(
          setPageInfo({
            currentPageNum: pageNum,
            totalPage: data.total_pages,
            totalRecords: data.total_records,
          })
        );
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

  useEffect(() => {
    if (!fetchedData[pageNum]?.length) {
      try {
        setLoading({ nameLoading: true, detailsLoading: true });
        fetchData(getPeopleUrl(pageNum));
      } catch (e) {
        console.log(e);
      }
    } else {
      dispatch(setPeopleList(fetchedData[pageNum]));
    }
  }, [pageNum]);

  return { loading, error };
};
