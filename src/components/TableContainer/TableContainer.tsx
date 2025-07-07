import { useState } from "react";
import { useFetchPeople } from "@/hooks/useFetchPeople";
import { TableComponent } from "./TableComponent";
import { useAppSelector } from "@/store/hooks";
import { PaginationComponent } from "../PaginationComponent/PaginationComponent";
import SearchComponent from "../searchComponent/SearchComponent";

const TableContainer: React.FC = () => {
  const { peopleDetailList, searchResult } = useAppSelector((state) => state.people);
  const [pageNum, setpageNum] = useState<number>(1);
  const { loading, error } = useFetchPeople(pageNum);

  const handleNextBtnClick = () => {
    setpageNum((prev) => prev + 1);
  };

  const handlePrevBtnClick = () => {
    setpageNum((prev) => prev - 1);
  };

  return (
    <>
      <div className="m-2 p-2">
        <SearchComponent />
        <TableComponent data={searchResult.length === 0 ? peopleDetailList : searchResult} loading={loading} />
        <PaginationComponent pageNum={pageNum} handleNextBtnClick={handleNextBtnClick} handlePrevBtnClick={handlePrevBtnClick} />
      </div>
    </>
  );
};

export default TableContainer;
