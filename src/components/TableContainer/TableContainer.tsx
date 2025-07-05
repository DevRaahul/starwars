import { useState } from "react";
import { useFetchPeople } from "@/hooks/useFetchPeople";
import { TableComponent } from "./TableComponent";
import { Input } from "../ui/input";
import { useAppSelector } from "@/store/hooks";
import { PaginationComponent } from "../PaginationComponent/PaginationComponent";

const TableContainer: React.FC = () => {
  const { peopleDetailList } = useAppSelector((state) => state.people);
  const [pageNum, setpageNum] = useState<number>(1);

  const { loading, error, totalPage } = useFetchPeople(pageNum);

  const handleNextBtnClick = () => {
    setpageNum((prev) => prev + 1);
  };

  const handlePrevBtnClick = () => {
    setpageNum((prev) => prev - 1);
  };

  return (
    <>
      <div className="m-2 p-2">
        <Input placeholder="Search by name ..." className="w-1/2 mb-2" />
        <TableComponent data={peopleDetailList} loading={loading} />
        <PaginationComponent
          totalPage={totalPage}
          pageNum={pageNum}
          handleNextBtnClick={handleNextBtnClick}
          handlePrevBtnClick={handlePrevBtnClick}
        />
      </div>
    </>
  );
};

export default TableContainer;
