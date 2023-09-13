import styled from "styled-components";
import { ITypeLink, ITypeIcon, IPropsStyleLink } from "./index.interface";
import { colorHover, convertCustomTheme } from "./index.helper";

export const Link = styled.a`
  text-decoration: none;
  color: ${({ color, disabled, customColor, colorPalette }: IPropsStyleLink) =>
    disabled
      ? colorPalette.neutral500
      : color === "custom"
      ? colorPalette[convertCustomTheme(customColor, false)]
      : colorPalette[color]};
  pointer-events: ${({ disabled }: IPropsStyleLink) =>
    disabled ? "none" : "all"};
  transition: all 0.1s linear 0.1s;

  &:hover {
    color: ${colorHover()};
  }

  &:hover span svg path {
    fill: ${colorHover()};
  }
  ${({ styles }: IPropsStyleLink) => styles}
`;

interface IPropsLinkBody {
  align: string;
}
export const LinkBody = styled.span`
  display: flex;
  justify-content: ${({ align }: IPropsLinkBody) =>
    align === "left" ? "start" : align === "center" ? "center" : "right"};
  svg {
    align-self: center;
  }
  svg, svg path {
    transition: all 0.1s linear 0.1s;
  }
`;

interface IPropsLinkText {
  typeLink: ITypeLink;
  typeIcon: ITypeIcon;
}
export const LinkText = styled.span`
  font-family: 'Outfit-Regular';
  font-style: normal;
  font-weight: 500;
  font-size: ${({ typeLink }: IPropsLinkText) =>
    typeLink === "section" ? "12px" : "16px"};
  line-height: ${({ typeLink }: IPropsLinkText) =>
    typeLink === "section" ? "12px" : "20px"};
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.5px;
  margin: 0px ${({ typeIcon }: IPropsLinkText) =>
    typeIcon === "noIcon" ? "0px" : "2px"};
`;
