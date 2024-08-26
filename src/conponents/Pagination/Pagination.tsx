import { Button, Center, Group } from "@mantine/core";
import React from "react";

interface PaginationProps {
  previous: string | null;
  next: string | null;
  currentPage: number;
  totalPages: number;
  onPageChange: (url: string) => void;
}

const Pagination: React.FC<PaginationProps> = ({
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
    <Center>
      <Group>
        <Button
          onClick={() => handlePreviousPageChange(previous)}
          variant="default"
          disabled={!previous}
        >
          Prev
        </Button>
        <Button
          onClick={() => handleNextPageChange(next)}
          variant="default"
          disabled={!next}
        >
          Next
        </Button>
      </Group>
    </Center>
  );
};

export default Pagination;
