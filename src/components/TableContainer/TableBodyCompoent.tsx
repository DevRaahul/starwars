import { Skeleton } from "../ui/skeleton";
import { TableBody, TableCell, TableRow } from "@/components/ui/table";
import type { ITableComponent } from "@/constants/interface";
import * as React from "react";

const TableBodyCompoent: React.FC<ITableComponent> = ({ data, loading }) => {
  return (
    <>
      <TableBody>
        {data.map((hero: any) => (
          <TableRow key={hero.uid}>
            {loading.nameLoading ? (
              <TableCell>
                <Skeleton className="h-4 w-[200px]" />
              </TableCell>
            ) : (
              <TableCell className="p-4">{hero.name}</TableCell>
            )}
            {loading.detailsLoading ? (
              <TableCell>
                <Skeleton className="h-4 w-[200px]" />
              </TableCell>
            ) : (
              <TableCell className="p-4">{hero?.gender}</TableCell>
            )}
            {loading.detailsLoading ? (
              <TableCell>
                <Skeleton className="h-4 w-[200px]" />
              </TableCell>
            ) : (
              <TableCell className="p-4">{hero?.planet?.name}</TableCell>
            )}
          </TableRow>
        ))}
      </TableBody>
    </>
  );
};

export default TableBodyCompoent;
