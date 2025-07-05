import { useFetchPeople } from "@/hooks/useFetchPeople";
import { TableComponent } from "./TableComponent";
import { Input } from "../ui/input";
import { useAppSelector } from "@/store/hooks";
import { getApiUrl } from "@/utils/utils";
import { PaginationDemo } from "../PaginationComponent/PaginationComponent";

const TableContainer: React.FC = () => {
  const { pageNum, peopleDetailList } = useAppSelector((state) => state.people);
  console.log("people details", peopleDetailList);

  const { loading, error } = useFetchPeople(getApiUrl(pageNum));
  return (
    <>
      <div className="m-2 p-2">
        <Input placeholder="Search by name ..." className="w-1/2 mb-2" />
        <TableComponent data={peopleDetailList} loading={loading} />
        <PaginationDemo />
      </div>
    </>
  );
};

export default TableContainer;
