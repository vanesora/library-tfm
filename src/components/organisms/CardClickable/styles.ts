import styled from "styled-components";

interface IStyleProps {
  type?: "horizontal" | "vertical";
  heightCard?: string;
  widthCard?: string;
}

export const CardClickable = styled.article`
  width: ${({ type, widthCard }: IStyleProps) =>
    widthCard ?? type === "horizontal" ? "340px" : "160px"};
  background-color: white;
  box-shadow: 0px 4px 12px rgba(189, 189, 189, 0.25);
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  height: ${({ heightCard }: IStyleProps) => heightCard ?? "auto"};

  display: ${({ type }: IStyleProps) => type === "horizontal" && "flex"};
  align-items: ${({ type }: IStyleProps) => type === "horizontal" && "center"};

  &:hover {
    box-shadow: 0px 4px 12px rgba(100, 100, 100, 0.25)
  }
`;

export const CardClickableInfo = styled.section``;

export const CardClickableTitle = styled.section`
  padding-bottom: 12px;
`;

export const CardClickableImage = styled.figure`
  margin: 0;
  text-align: center;
  margin-right: ${({ type }: IStyleProps) =>
    type === "horizontal" ? "16px" : "0"};
  width: 160px;
  min-width: 160px;
`;

export const CardClickableDescription = styled.section`
  padding: 16px 0 8px;
`;

export const CardClickableCategory = styled.section`
  padding: 8px 0;
`;

export const CardClickablePoints = styled.section`
  padding-bottom: 12px;
`;
