import { useNavigate } from "react-router";
import { Skeleton } from "../ui/skeleton";
import { TableBody, TableCell, TableRow } from "@/components/ui/table";
import type { IPersonInfo, ITableComponent } from "@/constants/peopleInterface";
import { Button } from "../ui/button";
import { useAppDispatch } from "@/store/hooks";
import { removeFavourite } from "@/store/feature/favouriteSlice";

const TableBodyCompoent: React.FC<ITableComponent> = ({ data, loading, showFavIcon }) => {
  const navigate = useNavigate();
  const handleNavigate = (details: IPersonInfo): void => {
    navigate("/personInfo", {
      state: details,
    });
  };
  const dispatch = useAppDispatch();

  const removeFav = (id: string) => {
    dispatch(removeFavourite(id));
  };

  return (
    <>
      <TableBody>
        {data.map((hero: IPersonInfo) => (
          <TableRow key={hero.uid}>
            {loading.nameLoading ? (
              <TableCell className="min-w-[130px] sm:min-w-[120px] lg:min-w-[200px]">
                <Skeleton className="h-4 bg-gray-400" />
              </TableCell>
            ) : (
              <TableCell
                className="p-4 min-w-[130px] sm:min-w-[120px] lg:min-w-[200px] hover:cursor-pointer hover:text-blue-400 text-ellipsis"
                onClick={() => handleNavigate(hero)}
              >
                {hero.name}
              </TableCell>
            )}
            {loading.detailsLoading ? (
              <TableCell className="min-w-[100px] sm:min-w-[80px] lg:min-w-[190px]">
                <Skeleton className="h-4 bg-gray-400" />
              </TableCell>
            ) : (
              <TableCell className="p-4 min-w-[100px] sm:min-w-[80px] lg:min-w-[190px] text-ellipsis">{hero?.gender}</TableCell>
            )}
            {loading.detailsLoading ? (
              <TableCell className="min-w-[80px] sm:min-w-[100px] lg:min-w-[190px]">
                <Skeleton className="h-4 bg-gray-400" />
              </TableCell>
            ) : (
              <TableCell className="p-4 min-w-[80px] sm:min-w-[100px] lg:min-w-[190px] text-ellipsis">{hero?.planet?.name}</TableCell>
            )}
            {showFavIcon && (
              <TableCell className="p-4 w-[100px] min-w-[80px] sm:min-w-[100px] lg:min-w-[120px]">
                <Button variant="outline" className="hover:cursor-pointer hover:bg-red-400 hover:text-white" onClick={() => removeFav(hero.uid)}>
                  Remove
                </Button>
              </TableCell>
            )}
          </TableRow>
        ))}
      </TableBody>
    </>
  );
};

export default TableBodyCompoent;
