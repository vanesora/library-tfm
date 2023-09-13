import styled from "styled-components";

interface IItemContainerStyleProps {
  itemSeparation: string;
  align?: "right" | "center" | "left";
}

interface IListStyleProps {
  listWidth: string;
}

interface ISectionListStyleProps {
  orientation: "vertical" | "horizontal";
  align?: "right" | "center" | "left";
}

interface IRowContainerProps {
  align: "right" | "center" | "left";
}

export const ItemContainer = styled.div`
  display: flex;
  padding: ${({ itemSeparation }: IItemContainerStyleProps) => itemSeparation};
  justify-content: ${({ align }: IItemContainerStyleProps) => align};
`;

export const List = styled.div`
  width: ${({ listWidth }: IListStyleProps) => listWidth};
`;

export const ListSectionContainer = styled.div`
${({ orientation, align }: ISectionListStyleProps) =>
  orientation === "vertical"
    ? null
    : `
    display: flex;
    overflow-x: auto;
    justify-content: ${align};
		`};
`;

export const RowContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: ${({ align }: IRowContainerProps) => align};
`;
