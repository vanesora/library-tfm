import React, { useContext } from "react";
import { keysTheme } from "data/dataMx";
import { AtomIcon } from "react/atoms/Icon";
import { GeneralStyledBtn } from "./styles";
import { AtomBody } from "react/atoms/Typography/Body";
import { CSSObject } from "styled-components";
import { ThemeContext } from "context/context";

export interface IPropsBackButton
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Enable or disable the button */
  disabled: boolean;
  /** Click action */
  onClick?: (e?: any) => void;
  /** Text of button */
  text?: string;
  /** Size of component + measurement unit */
  width?: string;
  /** Minimum button size */
  minWidth?: string;
  /** Arrow color (only arrow) */
  arrowColor?: keysTheme;
  /** Css proprieties */
  styles?: CSSObject;
  /** Icon size */
  iconSize?: number;
}

export const AtomButtonBack = ({
  disabled,
  onClick,
  text,
  width = "190px",
  minWidth = "190px",
  arrowColor,
  iconSize = 14,
  styles = {},
  ...props
}: IPropsBackButton) => {
  const { palette } = useContext(ThemeContext);

  return (
    <GeneralStyledBtn
      {...props}
      colorPalette={palette}
      disabled={disabled}
      onClick={onClick}
      width={width}
      type={"button"}
      minWidth={minWidth}
      styles={styles}
      arrowColor={arrowColor && palette[arrowColor]}
    >
      <AtomIcon
        icon="keyboard_arrow_left"
        size={iconSize}
        color={disabled ? "neutral500" : arrowColor ?? "neutral600"}
      />
      {text && (
        <AtomBody
          text={text}
          size="xlarge"
          color={disabled ? "neutral500" : "neutral600"}
          weight="medium"
          styles={{ marginLeft: "16px" }}
        />
      )}
    </GeneralStyledBtn>
  );
};
