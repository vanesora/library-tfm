/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { IPalette } from "interfaces/index";
import styled from "styled-components";

interface IStylesProps {
  colors: IPalette;
  check?: boolean;
  active?: boolean;
  link?: boolean;
}
interface IColors {
  colors: IPalette;
}

export const FilterAccordionContent = styled.section`
  width: 100%;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid ${({ colors }: IColors) => colors.neutral300};
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 8px 24px;
`;

export const FilterRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  background-color: ${({ check, active, link, colors }: IStylesProps) =>
    check
      ? colors.neutral200
      : active && link
      ? colors.neutral200
      : colors.neutral100};
  align-content: center;
  align-items: baseline;
  padding: ${({ check }: IStylesProps) => (check ? "10px 25px" : "0")};
  input[type="checkbox"]:checked {
    background-color: ${({ colors }: IColors) => colors.primary};
    border: 2px solid ${({ colors }: IColors) => colors.primary};
  }
`;

export const SortingRow = styled.div`
  display: block;
  background-color: ${({ colors }: IColors) => colors.neutral200};
  padding: 8px 24px;
`;

export const FilterAccordionSortButton = styled.div`
  > div {
    display: flex;
    margin-top: 12px;
    flex-wrap: wrap;
    > div {
      width: auto;
    }
  }
`;

export const ShowMore = styled.div`
  padding: 8px 24px;
  background-color: ${({ colors }: IColors) => colors.neutral200};
  label {
    cursor: pointer;
  }
`;

export const CollapsiblePanel = styled.div``;

export const DismissContainer = styled.div`
  display: inline-block;
  cursor: pointer;
  margin: 24px;
`;

export const Bar = styled.div`
  width: 17px;
  height: 3px;
  background-color: ${({ colors }: IColors) => colors.neutral600};
  margin: 0 0 3px 0;
  transition: 0.4s;

  &.bar1 {
    -webkit-transform: rotate(-45deg) translate(-4px, 5px);
    transform: rotate(-45deg) translate(-4px, 5px);
  }

  &.bar2 {
    opacity: 0;
  }

  &.bar3 {
    -webkit-transform: rotate(45deg) translate(-3px, -5px);
    transform: rotate(45deg) translate(-3px, -5px);
  }
`;
