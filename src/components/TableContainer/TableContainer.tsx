import { useEffect, useState } from "react";
import { TableComponent } from "./TableComponent";
import { peopleApi } from "../../constants/constant";
import type { ICharacterDetails, IHeroDetails, IPeopleApi } from "@/constants/interface";

const TableContainer: React.FC = () => {
  const [peopleList, setpeopleList] = useState<any[]>([]);

  const getHeroDetails = (data: ICharacterDetails[]) => {
    const batchPromise = data.map((dt: ICharacterDetails) => fetch(dt.url));
    Promise.all([...batchPromise])
      .then((res) => Promise.all(res.map((dt) => dt.json())))
      .then((resObj: IHeroDetails[]) => {
        let arrayList: any[] = [];
        let planetList: any = resObj.map((dt: IHeroDetails) => fetch(dt.result.properties.homeworld));
        Promise.all(planetList)
          .then((planetData) => Promise.all(planetData.map((dt) => dt.json())))
          .then((response: any[]) => {
            for (let i = 0; i < resObj.length; i++) {
              let obj = {
                planet: response[i]?.result?.properties,
                uid: resObj[i].result.uid,
                ...resObj[i].result.properties,
              };
              arrayList.push(obj);
            }
            console.log(arrayList);
          });

        setpeopleList([...arrayList]);
      });
  };

  const fetchData = (url: string) => {
    fetch(url)
      .then((res) => res.json())
      .then((data: IPeopleApi) => {
        const { results } = data;
        getHeroDetails(results);
      });
  };

  useEffect(() => {
    try {
      fetchData(peopleApi);
    } catch (e) {
      console.log(e);
    }
  }, []);
  return (
    <>
      <div className="m-2 p-2">
        <TableComponent data={peopleList} />
      </div>
    </>
  );
};

export default TableContainer;
