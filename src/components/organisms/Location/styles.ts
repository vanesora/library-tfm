import styled from "styled-components";
import { theme } from "data/dataMx";

export const LocationContainer = styled.div``;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items:center;
  justify-content: start;
  padding-left: 35px;
`;

export const HeaderTextContainer = styled.div`
  display: flex;
  justify-content: center;
  width 100%;
`;

export const ResultsContainer = styled.div`
  background-color: ${theme.neutral200}; 
`;

export const SearchContainer = styled.div`
  display:flex;
  padding-left: 35px;
`;

export const LocationItem = styled.div`
  display: flex;
  align-items: center;
  background-color: ${theme.neutral200};
`;

export const InputSearchContainer = styled.div`
  width: 100%;
`;

export const ButtonSearchContainer = styled.div`
  margin-top: -12px;
`;
