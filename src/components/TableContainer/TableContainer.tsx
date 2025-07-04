import { useFetchPeople } from "@/hooks/useFetchPeople";
import { TableComponent } from "./TableComponent";
import { peopleApi } from "@/constants/constant";
import { Input } from "../ui/input";

const TableContainer: React.FC = () => {
  const { peopleList, loading, error } = useFetchPeople(peopleApi);
  return (
    <>
      <div className="m-2 p-2">
        <Input placeholder="Search by name ..." className="w-1/2 mb-2" />
        <TableComponent data={peopleList} loading={loading} />
      </div>
    </>
  );
};

export default TableContainer;
