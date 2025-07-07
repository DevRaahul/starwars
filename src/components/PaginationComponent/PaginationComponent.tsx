import { Pagination, PaginationContent, PaginationItem, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { useAppSelector } from "@/store/hooks";

interface IPaginationComponent {
  pageNum: number;
  handleNextBtnClick: () => void;
  handlePrevBtnClick: () => void;
}

export const PaginationComponent: React.FC<IPaginationComponent> = ({ pageNum, handlePrevBtnClick, handleNextBtnClick }) => {
  const { pageInfo } = useAppSelector((state) => state.people);
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem className={pageNum > 1 ? undefined : "pointer-events-none opacity-50"}>
          <PaginationPrevious href="#" onClick={() => handlePrevBtnClick()} />
        </PaginationItem>
        <PaginationItem className={pageNum < pageInfo.totalPage ? undefined : "pointer-events-none opacity-50"}>
          <PaginationNext href="#" onClick={() => handleNextBtnClick()} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};
