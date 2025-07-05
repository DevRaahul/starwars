import { Pagination, PaginationContent, PaginationItem, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";

interface IPaginationComponent {
  pageNum: number;
  handleNextBtnClick: () => void;
  handlePrevBtnClick: () => void;
  totalPage: number;
}

export const PaginationComponent: React.FC<IPaginationComponent> = ({ pageNum, handlePrevBtnClick, handleNextBtnClick, totalPage }) => {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem className={pageNum > 1 ? undefined : "pointer-events-none opacity-50"}>
          <PaginationPrevious href="#" onClick={() => handlePrevBtnClick()} />
        </PaginationItem>
        <PaginationItem className={pageNum < totalPage ? undefined : "pointer-events-none opacity-50"}>
          <PaginationNext href="#" onClick={() => handleNextBtnClick()} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};
