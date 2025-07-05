import { Pagination, PaginationContent, PaginationItem, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { useFetchPeople } from "@/hooks/useFetchPeople";
import { setCurrentUrl } from "@/store/feature/peopleSlice";
import { useAppSelector, useAppDispatch } from "@/store/hooks";
import { getApiUrl } from "@/utils/utils";
import { useState } from "react";

export const PaginationDemo: React.FC = () => {
  const { pageNum } = useAppSelector((state) => state.people);
  const dispatch = useAppDispatch();

  // console.log("previousUrl", previousUrl);
  // console.log("nextUrl", nextUrl);

  const handleNextBtnClick = () => {
    dispatch(setCurrentUrl(getApiUrl(pageNum)));
  };

  // const handlePrevBtnClick = () => {
  //   dispatch(setCurrentUrl(previousUrl));
  // };

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem className={pageNum > 1 ? undefined : "pointer-events-none opacity-50"}>
          <PaginationPrevious href="#" onClick={handleNextBtnClick} />
        </PaginationItem>
        <PaginationItem className={pageNum > 9 ? undefined : "pointer-events-none opacity-50"}>
          <PaginationNext href="#" onClick={handleNextBtnClick} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};
