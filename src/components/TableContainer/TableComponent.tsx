import { Table, TableCell, TableFooter, TableRow } from "@/components/ui/table";
import { PaginationDemo } from "../PaginationComponent/PaginationComponent";
import TableHeaderComponent from "./TableHeaderComponent";
import TableBodyCompoent from "./TableBodyCompoent";
import type { ITableComponent } from "@/constants/interface";

export const TableComponent: React.FC<ITableComponent> = ({ data, loading }) => {
  return (
    <div className="rounded-md border border-gray-300">
      <Table>
        <TableHeaderComponent />
        <TableBodyCompoent data={data} loading={loading} />
        {/* <TableFooter>
          <TableRow>
            <TableCell colSpan={3}></TableCell>
          </TableRow>
        </TableFooter> */}
      </Table>
    </div>
  );
};
