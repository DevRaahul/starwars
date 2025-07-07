import { useState } from "react";
import { useAppSelector } from "@/store/hooks";
import TableBodyCompoent from "../TableContainer/TableBodyCompoent";
import TableHeaderComponent from "../TableContainer/TableHeaderComponent";
import { Table } from "../ui/table";

const FavouritesContainer = () => {
  const [loading] = useState({ nameLoading: false, detailsLoading: false });
  const { value } = useAppSelector((state) => state.favourites);

  return (
    <>
      <div className="m-2 p-2">
        {value.length > 0 && (
          <>
            <h3 className="text-lg font-semibold">Favourites Characters</h3>
            <div className="rounded-md border border-gray-300 mt-4">
              <Table>
                <TableHeaderComponent />
                <TableBodyCompoent data={value} loading={loading} showFavIcon />
              </Table>
            </div>
          </>
        )}
        {value.length === 0 && (
          <div className="mt-4 flex items-center justify-center">
            <h3 className="text-lg font-bold">No records to display.</h3>
          </div>
        )}
      </div>
    </>
  );
};

export default FavouritesContainer;
