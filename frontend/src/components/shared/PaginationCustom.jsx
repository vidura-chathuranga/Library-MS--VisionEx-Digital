import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const PaginationCustom = ({ pages, page }) => {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            className={page - 1 === 0 && "pointer-events-none"}
            href={`/page/${page - 1}`}
          />
        </PaginationItem>
        {[...Array(pages).keys()].map((x) => (
          <PaginationItem key={x + 1}>
            <PaginationLink href={`/page/${x + 1}`} isActive={x + 1 === page}>
              {x + 1}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationNext
            href={`/page/${page + 1}`}
            className={page === pages && "pointer-events-none"}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationCustom;
