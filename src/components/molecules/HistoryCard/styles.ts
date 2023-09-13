import styled from "styled-components";

interface IStyleProps {
  hasTag: boolean;
  hasDate: boolean;
}

interface IIconCenteredStyleProps {
  isIconCentered: boolean;
}

export const Container = styled.div`
  display:flex;
  justify-content: space-between;
  width: 100%;
`;

export const IconContainer = styled.div`
  display:flex;
  align-items: center;
  gap:15px;
`;

export const DescriptionContainer = styled.div`
  display:flex;
  max-width: ${({ isIconCentered }: IIconCenteredStyleProps) =>
    isIconCentered ? "100%" : "60%"};
  flex-direction: column;
  justify-content: center;
  gap: 8px;

`;

export const RightContainer = styled.div`
  display: flex;
  gap: 8px;

`;

export const ArrowContainer = styled.div`
  align-self: center;
`;
export const DateContainer = styled.div`
  gap: 5px;
  display: flex;
  flex-direction: column;
  align-items: ${({ hasTag }: IStyleProps) => (hasTag ? "center" : "flex-end")};
  justify-content: ${({ hasDate }: IStyleProps) =>
    hasDate ? "flex-start" : "center"};
`;

export const CenteredIconContainer = styled.div`
  display:flex;
  align-items: center;
  margin-right: 13px;
`;

export const LeftContainer = styled.div`
  display:flex;
`;
