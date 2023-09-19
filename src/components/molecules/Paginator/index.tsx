import React, {
  FunctionComponent,
  useEffect,
  useState,
} from "react";
import { AtomButtonIcon } from "../../atoms/Buttons/Icon";
import { AtomParagraph } from "../../atoms/Typography/Paragraph";
import { ContainerPaginator } from "./styles";


export interface IPaginatorProps {
  /* unique value of each element */
  totalPages: number;
  /* Label that the button displays */
  onPageChange: (e?: any)=>void;
  /* where is the button disabled or not */
  currentPage: number;
}

export const MoleculePaginator: FunctionComponent<IPaginatorProps> = ({
  totalPages,
  onPageChange,
  currentPage,
}) => {
  const [page, setPage] = useState(currentPage || 1);

  useEffect(() => {
    setPage(currentPage || 1);
  }, [currentPage]);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
      if (onPageChange) {
        onPageChange(newPage);
      }
    }
  };

  const handlePreviousPage = () => {
    handlePageChange(page - 1);
  };

  const handleNextPage = () => {
    handlePageChange(page + 1);
  };

  return (
    <ContainerPaginator>
      <AtomButtonIcon
        icon="keyboard_arrow_left"
        color="custom"
        customColor="#ff7300"
        onClick={handlePreviousPage}
        disabled={page === 1}
        size="small"
      />
      <AtomParagraph text={`Página ${page} de ${totalPages}`} size="large" color="#ff7300" />
      <AtomButtonIcon
        icon="keyboard_arrow_right"
        color="custom"
        customColor="#ff7300"
        onClick={handleNextPage}
        disabled={page === totalPages}
        size="small"
      />
    </ContainerPaginator>
  );
};
