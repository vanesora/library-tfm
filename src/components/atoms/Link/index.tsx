import React, { FunctionComponent, Fragment, useContext } from "react";
import { Link, LinkBody, LinkText } from "./styles";
import { IAlign } from "../Typography/TypographyProps";
import { IColor, ITypeIcon } from "./index.interface";
import { AtomIcon } from "../Icon";

export interface ILinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /** URL to redirect */
  url: string;
  /** Type icons (left, right, both) */
  typeIcon: ITypeIcon;
  /** Text link */
  text: string;
  /** Color text & icons (primary, secondary, custom) */
  color?: IColor;
  /** Custom color (tertiary, quaternary, quinary, senary, dark, light, neutral) */
  customColor?: string;
  /** Align text (left, right, center) */
  align?: IAlign;
  /** Name icon left */
  nameIconLeft?: string;
  /** Name icon right */
  nameIconRight?: string;
  /** Disabled flag to link */
  disabled?: boolean;
  /** Styles in format CSSObject */
  target?: React.HTMLAttributeAnchorTarget | undefined;
}

export const AtomLink: FunctionComponent<ILinkProps> = ({
  url,
  typeIcon,
  text,
  color = "primary",
  customColor = "black",
  align = "left",
  nameIconLeft = "keyboard_arrow_left",
  nameIconRight = "keyboard_arrow_right",
  disabled = false,
  target = "_self",
}) => {
  const colorDisabled: any = disabled
    ? "#767171"
    : color === "custom"
    ? customColor
    : color === "primary"
    ? "#090088"
    : "#FF7300";

  return (
    <Fragment>
      <Link
        color={colorDisabled}
        disabled={disabled}
        href={disabled ? "" : url}
        target={target}
        typeIcon={typeIcon}
      >
        <LinkBody align={align}>
          {(typeIcon === "Left" || typeIcon === "LeftRight") && (
            <AtomIcon
              icon={nameIconLeft}
              size={"small"}
              color={colorDisabled}
            />
          )}
          <LinkText>{text}</LinkText>
          {(typeIcon === "Right" || typeIcon === "LeftRight") && (
            <AtomIcon
              icon={nameIconRight}
              size={"small"}
              color={colorDisabled}
            />
          )}
        </LinkBody>
      </Link>
    </Fragment>
  );
};
