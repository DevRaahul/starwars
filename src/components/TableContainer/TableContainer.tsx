import { useMemo, useState } from "react";
import { useFetchPeople } from "@/hooks/useFetchPeople";
import { TableComponent } from "./TableComponent";
import { useAppSelector } from "@/store/hooks";
import { PaginationComponent } from "../PaginationComponent/PaginationComponent";
import SearchComponent from "../searchComponent/SearchComponent";
import type { IPersonInfo } from "@/constants/peopleInterface";

const TableContainer: React.FC = () => {
  const { peopleDetailList, searchResult } = useAppSelector((state) => state.people);
  const [pageNum, setpageNum] = useState<number>(1);
  const { loading, error } = useFetchPeople(pageNum);

  const handleNextBtnClick = (): void => {
    setpageNum((prev) => prev + 1);
  };

  const handlePrevBtnClick = (): void => {
    setpageNum((prev) => prev - 1);
  };

  const data: IPersonInfo[] = useMemo(() => (searchResult.length === 0 ? peopleDetailList : searchResult), [searchResult, peopleDetailList]);
  return (
    <>
      <div className="m-2 p-2">
        <SearchComponent />
        <TableComponent data={data} loading={loading} showFavIcon={false} />
        <PaginationComponent pageNum={pageNum} handleNextBtnClick={handleNextBtnClick} handlePrevBtnClick={handlePrevBtnClick} />
      </div>
      {error && <p className="text-red-500 text-sm p-2">Failed to load data. Please try again.</p>}
    </>
  );
};

export default TableContainer;
