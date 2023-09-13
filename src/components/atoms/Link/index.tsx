import React, { FunctionComponent, Fragment, useContext } from "react";
import { Link, LinkBody, LinkText } from "./styles";
import { IAlign } from "../Typography/TypographyProps";
import { IColor, ICustomColor, ITypeIcon, ITypeLink } from "./index.interface";
import { AtomIcon } from "react/atoms/Icon";
import { CSSObject } from "styled-components";
import { convertCustomTheme } from "./index.helper";
import { ThemeContext } from "context/context";

export interface ILinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /** URL to redirect */
  url: string;
  /** Type icons (left, right, both) */
  typeIcon: ITypeIcon;
  /** Text link */
  text: string;
  /** Type link (default, section) */
  typeLink?: ITypeLink;
  /** Color text & icons (primary, secondary, custom) */
  color?: IColor;
  /** Custom color (tertiary, quaternary, quinary, senary, dark, light, neutral) */
  customColor?: ICustomColor;
  /** Align text (left, right, center) */
  align?: IAlign;
  /** Name icon left */
  nameIconLeft?: string;
  /** Name icon right */
  nameIconRight?: string;
  /** Disabled flag to link */
  disabled?: boolean;
  /** Styles in format CSSObject */
  styles?: CSSObject;
  /** Native target html */
  target?: React.HTMLAttributeAnchorTarget | undefined;
}

export const AtomLink: FunctionComponent<ILinkProps> = ({
  url,
  typeIcon,
  text,
  typeLink = "default",
  color = "primary",
  customColor = "neutral",
  align = "left",
  nameIconLeft = "keyboard_arrow_left",
  nameIconRight = "keyboard_arrow_right",
  disabled = false,
  styles = {},
  target = "_self",
}) => {
  const sizeIcons = typeLink === "section" ? 8.33 : 16.67;
  const colorDisabled: any = disabled
    ? "neutral500"
    : color === "custom"
    ? convertCustomTheme(customColor, false)
    : color == "primary"
    ? "primary"
    : "secondary";

  const { palette } = useContext(ThemeContext);

  return (
    <Fragment>
      <Link
        colorPalette={palette}
        color={color}
        customColor={customColor}
        disabled={disabled}
        href={disabled ? "" : url}
        target={target}
        styles={styles}
      >
        <LinkBody align={align} color={color}>
          {(typeIcon === "Left" || typeIcon === "LeftRight") && (
            <AtomIcon
              icon={
                typeLink === "section" ? "keyboard_arrow_left" : nameIconLeft
              }
              size={sizeIcons}
              color={colorDisabled}
            />
          )}
          <LinkText typeLink={typeLink} typeIcon={typeIcon}>
            {text}
          </LinkText>
          {(typeIcon === "Right" || typeIcon === "LeftRight") && (
            <AtomIcon
              icon={
                typeLink === "section" ? "keyboard_arrow_right" : nameIconRight
              }
              size={sizeIcons}
              color={colorDisabled}
            />
          )}
        </LinkBody>
      </Link>
    </Fragment>
  );
};
