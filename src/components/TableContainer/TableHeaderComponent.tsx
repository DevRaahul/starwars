import { TableHead, TableHeader, TableRow } from "@/components/ui/table";

const TableHeaderComponent = () => {
  return (
    <>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Gender</TableHead>
          <TableHead>Planet</TableHead>
        </TableRow>
      </TableHeader>
    </>
  );
};

export default TableHeaderComponent;
