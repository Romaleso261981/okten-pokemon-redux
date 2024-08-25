import React from "react";

interface PaginationProps {
  previous: string | null;
  next: string | null;
  currentPage: number;
  totalPages: number;
  onPageChange: (url: string) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  previous,
  next,
  onPageChange
}) => {
  const handleNextPageChange = (url: string | null) => {
    if (url) {
      onPageChange(url);
    }
  };

  const handlePreviousPageChange = (url: string | null) => {
    if (url) {
      onPageChange(url);
    }
  };

  return (
    <div className="pagination">
      <button
        onClick={() => handlePreviousPageChange(previous)}
        disabled={previous === null}
      >
        Prev
      </button>
      <span>{currentPage}</span>
      <button
        onClick={() => handleNextPageChange(next)}
        disabled={next === null}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
