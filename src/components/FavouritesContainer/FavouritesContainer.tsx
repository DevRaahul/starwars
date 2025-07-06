import { useState } from "react";
import { useAppSelector } from "@/store/hooks";
import TableBodyCompoent from "../TableContainer/TableBodyCompoent";

const FavouritesContainer = () => {
  const [loading] = useState({ nameLoading: false, detailsLoading: false });
  const { value } = useAppSelector((state) => state.favourites);

  return (
    <>
      <div className="m-2 p-2">
        <h3 className="text-lg font-semibold">Favourites Characters</h3>
        <TableBodyCompoent data={value} loading={loading} />
      </div>
    </>
  );
};

export default FavouritesContainer;
