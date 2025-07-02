import { useEffect } from "react";
import { TableComponent } from "./TableComponent";

const TableContainer: React.FC = () => {
  useEffect(() => {}, []);
  return (
    <>
      <div className="m-2 p-2">
        <TableComponent />
      </div>
    </>
  );
};

export default TableContainer;
