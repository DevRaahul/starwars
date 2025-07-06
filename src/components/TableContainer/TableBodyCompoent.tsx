import { useNavigate } from "react-router";
import { Skeleton } from "../ui/skeleton";
import { TableBody, TableCell, TableRow } from "@/components/ui/table";
import type { IPersonInfo, ITableComponent } from "@/constants/peopleInterface";

const TableBodyCompoent: React.FC<ITableComponent> = ({ data, loading }) => {
  const navigate = useNavigate();
  const handleNavigate = (details: IPersonInfo): void => {
    navigate("/personInfo", {
      state: details,
    });
  };

  return (
    <>
      <TableBody>
        {data.map((hero: IPersonInfo) => (
          <TableRow key={hero.uid} onClick={() => handleNavigate(hero)}>
            {loading.nameLoading ? (
              <TableCell>
                <Skeleton className="h-4 w-[200px]" />
              </TableCell>
            ) : (
              <TableCell className="p-4 hover:cursor-pointer">{hero.name}</TableCell>
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
