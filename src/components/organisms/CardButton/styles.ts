import { keysTheme } from "data/dataMx";
import { ITheme } from "interfaces";
import styled from "styled-components";
import { OrientationCard } from ".";

interface IStylesProps {
  theme: ITheme;
  orientation: OrientationCard;
  height?: string;
  width?: string;
}

interface IStylesTagProps {
  color: keysTheme;
  theme: ITheme;
}

export const CardButton = styled.div`
  width: ${({ width }: IStylesProps) => width};
  height: ${({ height }: IStylesProps) => height};
  border-radius: 8px;
  box-shadow: ${({ theme }: IStylesProps) =>
    `0px 4px 16px ${theme.neutral400}`};
  position: relative;
  display: flex;
  flex-direction: ${({ orientation }: IStylesProps) => orientation};
  align-items: center;
  background-color: ${({ theme }: IStylesProps) => theme.neutral100};
`;

export const TextImage = styled.div`
  max-width: 100%;
  position: absolute;
  top: 0;
  right: 0;
  background-color: ${({ theme, color }: IStylesTagProps) => theme[color]};
  padding: 2px 16px;
  border-radius: 0px 8px;
  height: 20px;
  display: flex;
  align-items: center;
`;

export const ContainerImage = styled.div`
  height: ${({ orientation }: IStylesProps) =>
    orientation == "column" ? "42%" : "100%"};
  width: ${({ orientation }: IStylesProps) =>
    orientation == "column" ? "100%" : "45%"};
`;

export const ContainerText = styled.div`
  padding: 8px 16px;
  margin: ${({ orientation }: IStylesProps) =>
    orientation == "column" ? "0 0 60px" : "12px 0 60px"};
  height: ${({ orientation }: IStylesProps) =>
    orientation == "column" ? "calc(58% - 16px)" : "calc(100% - 28px)"};
  max-width: ${({ orientation }: IStylesProps) =>
    orientation == "column" ? "100%" : "55%"};
  min-width: ${({ orientation }: IStylesProps) =>
    orientation == "column" ? "calc(100% - 32px)" : "55%"};
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  h6{
    margin: 0;
    margin-bottom: 8px;
  }
`;

export const ContainerButton = styled.div`
  margin: 8px 0;
  padding: 0 16px;
  position: absolute;
  bottom: 8px;
  width:  ${({ orientation }: IStylesProps) =>
    orientation == "column" ? "100%" : "55%"};
  right: 0;
`;
