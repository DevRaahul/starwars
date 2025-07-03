import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { PaginationDemo } from "../PaginationComponent/PaginationComponent";
import type { ITableList } from "@/constants/interface";

export const TableComponent: React.FC<any> = ({ data }) => {
  return (
    <Table>
      <TableCaption>A list of star wars characters.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Gender</TableHead>
          <TableHead>Planet</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((hero: any) => (
          <TableRow key={hero.uid}>
            <TableCell className="p-4">{hero.name}</TableCell>
            <TableCell className="p-4">{hero.gender}</TableCell>
            <TableCell className="p-4">{hero.planet.name}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>
            <PaginationDemo />
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
};
