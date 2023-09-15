import styled from "styled-components";
import { ITypeIcon, IPropsStyleLink } from "./index.interface";
import { IAlign } from "../Typography/TypographyProps";

export const Link = styled.a<IPropsStyleLink>`
  text-decoration: none;
  color: ${({ color }: IPropsStyleLink) => color};
  pointer-events: ${({ disabled }: IPropsStyleLink) =>
    disabled ? "none" : "all"};
  transition: all 0.1s linear 0.1s;

  &:hover {
    color: ${({ disabled }) => (disabled ? "#767171" : "#456db3")};
  }
`;

interface IPropsLinkBody {
  align: IAlign;
}
export const LinkBody = styled.span<IPropsLinkBody>`
  display: flex;
  justify-content: ${({ align }: IPropsLinkBody) =>
    align === "left" ? "start" : align === "center" ? "center" : "right"};
  svg {
    align-self: center;
  }
  svg,
  svg path {
    transition: all 0.1s linear 0.1s;
  }
`;

export const LinkText = styled.span`
  font-family: "Outfit-Regular";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.5px;
`;
