import React, { useContext, useEffect, useState } from "react";

import { IItemProps, MoleculeListSelect } from "../../molecules/ListSelect";
import { MoleculeHeader } from "../../molecules/Header";
import { AtomIcon } from "../../atoms/Icon";
import { AtomSubtitle } from "../../atoms/Typography/Subtitle";
import {
  ActionCell,
  PaginatorContainer,
  TableCell,
  TableContainer,
  TableHeader,
  TableRow,
} from "./styles";
import { AtomButtonIcon } from "../../atoms/Buttons/Icon";
import { AtomToggle } from "../../atoms/Toggle";
import { MoleculePaginator } from "../../molecules/Paginator";

export interface ITableProps {
  /** headers and keys */
  headers: string[];
  /** all values rows*/
  data?: any[];
  /** rows actions */
  actions?: {
    edit?: (e?: any) => void;
    delete?: (e?: any) => void;
    changeStatus?: (e?: any) => void;
    view?: (e?: any) => void;
  };
  /** View id */
  showId?: boolean;
  /** View status */
  showStatus: boolean;
  /** Total pages table */
  totalPages: number;
  /** changePage action */
  onPageChange: (e?: any) => void;
}

export const OrganismTable = ({
  headers,
  data,
  actions,
  showId,
  showStatus,
  totalPages,
  onPageChange,
}: ITableProps): JSX.Element => {
  const [currentPage, setCurrentPage] = useState(1);
  const executeAction = (actionType: any, rowData: any) => {
    if (actionType === "edit" && actions?.edit) {
      actions.edit(rowData);
    } else if (actionType === "delete" && actions?.delete) {
      actions.delete(rowData);
    } else if (actionType === "changeStatus" && actions?.changeStatus) {
      actions.changeStatus(rowData);
    } else if (actionType === "view" && actions?.view) {
      actions.view(rowData);
    }
  };

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      if (onPageChange) {
        onPageChange(newPage);
      }
    }
  };

  return (
    <>
      <TableContainer>
        <thead>
          <TableRow>
            {headers.map((header, index) => (
              <TableHeader key={index} header={header}>
                {header === "id" && !showId
                  ? null
                  : header === "status" && !showStatus
                  ? null
                  : header}
              </TableHeader>
            ))}
            {actions &&
              (actions.edit ||
                actions.delete ||
                actions.changeStatus ||
                actions.view) && (
                <TableHeader header={"Actions"}>Actions</TableHeader>
              )}
          </TableRow>
        </thead>
        <tbody>
          {data &&
            data.map((row, rowIndex) => (
              <TableRow key={rowIndex}>
                {headers.map((header, index) => (
                  <TableCell key={index}>
                    {header === "id" && !showId
                      ? null
                      : header === "status" && !showStatus
                      ? null
                      : row[header]}
                  </TableCell>
                ))}
                {actions &&
                  (actions.edit ||
                    actions.delete ||
                    actions.changeStatus ||
                    actions.view) && (
                    <ActionCell>
                      {actions.edit && (
                        <AtomButtonIcon
                          icon="edit"
                          onClick={() => executeAction("edit", row)}
                          disabled={row.status === false}
                        />
                      )}
                      {actions.delete && (
                        <AtomButtonIcon
                          icon="delete"
                          onClick={() => executeAction("delete", row)}
                          disabled={row.status === false}
                        />
                      )}
                      {actions.changeStatus && (
                        <AtomToggle
                          size="medium"
                          onToggle={() => executeAction("changeStatus", row)}
                        />
                      )}
                      {actions.view && (
                        <AtomButtonIcon
                          icon="eye-on"
                          onClick={() => executeAction("view", row)}
                          disabled={false}
                        />
                      )}
                    </ActionCell>
                  )}
              </TableRow>
            ))}
        </tbody>
      </TableContainer>
      <PaginatorContainer>
        <MoleculePaginator
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </PaginatorContainer>
    </>
  );
};
