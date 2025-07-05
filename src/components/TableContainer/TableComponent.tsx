import { Table } from "@/components/ui/table";
import TableHeaderComponent from "./TableHeaderComponent";
import TableBodyCompoent from "./TableBodyCompoent";
import type { ITableComponent } from "@/constants/interface";

export const TableComponent: React.FC<ITableComponent> = ({ data, loading }) => {
  return (
    <div className="rounded-md border border-gray-300">
      <Table>
        <TableHeaderComponent />
        <TableBodyCompoent data={data} loading={loading} />
      </Table>
    </div>
  );
};
