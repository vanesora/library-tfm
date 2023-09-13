import styled, { CSSObject } from "styled-components";
import { colors } from "data/dataMx";

interface IStylesProps {
  progress?: string;
  align?: string;
  background?: colors;
  styles?: CSSObject;
}

export const Tier = styled.article`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0px 4px 16px rgba(116, 134, 141, 0.2);
  cursor: pointer;
  padding: 6px 16px;
  width: 230px;
  height: 60px;
  @media screen and (max-width: 624px){
    height: 34px;
  }
`;

export const TierPointsContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TierPointsNumber = styled.div`
  display: flex;
  align-items: center;

  label {
    margin-left: 4px;
  }
`;

export const TierProgressContainer = styled.section`
  margin: 4.5px 0;
  overflow: hidden;
  div {
    height: 4px;
    margin: 0;
  }
`;

export const TierCategoryContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: ${({ align }: IStylesProps) => align};
`;

export const TierCategoryName = styled.div`
  display: flex;
  align-items: center;

  label {
    margin-left: 4px;
  }
`;

export const TierCategoryRest = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 50%;
`;
