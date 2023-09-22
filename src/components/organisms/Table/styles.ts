/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import styled from "styled-components";

export const TableContainer = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableHeader = styled.th<{header: string}>`
  background-color: orange;
  color: white;
  font-weight: 700;
  padding: 8px;
  border: 1px solid orange;
  text-align: start;
  display: ${({ header }) => (header !== 'Actions' ? "table-cell" : "none")};
`;

export const TableRow = styled.tr`

`;

export const TableCell = styled.td`
  padding: 8px;
  border: 1px solid orange;
  color: black;
`;

export const ActionCell = styled.td`
  padding: 8px;
  border: none;
  display: flex;
  justify-content: start;
`;

export const PaginatorContainer = styled.table`
display: flex;
justify-content: start;
`;