/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React, { useContext, useState, Fragment, useEffect } from "react";
import { ThemeContext } from "context/context";
import { IFontWeight, ISetup } from "interfaces";
import {
  ToggleWrapperXs,
  LabelTextXs,
  ToggleContainerXs,
  StatusText,
} from "./styles";

export interface IToggleProps {
  isChecked?: boolean;
  name?: string;
  onText?: string;
  offText?: string;
  disabled?: boolean;
  size?: "xs" | "2xs";
  labelText?: string;
  focus?: boolean;
  onToggle: () => void;
}

export const AtomToggle = ({
  isChecked = false,
  name,
  onText = "On",
  offText = "Off",
  disabled = false,
  size = "xs",
  focus = false,
  labelText,
  onToggle,
}: IToggleProps): JSX.Element => {
  const { palette } = useContext(ThemeContext);
  const { fontFamily } = useContext(ThemeContext);
  const font: string = fontFamily.main["regular" as keyof IFontWeight];
  const [checked, setChecked] = useState<boolean>(isChecked);

  useEffect(() => {
    setChecked(isChecked);
  }, [isChecked]);

  return (
    <Fragment>
      {labelText && <LabelTextXs font={font}>{labelText}</LabelTextXs>}
      <ToggleWrapperXs className="toggle-wrapper" focus={focus} colors={palette}>
        <ToggleContainerXs size={size} focus={focus} colors={palette}>
          <input
            name={name}
            type="checkbox"
            checked={checked}
            disabled={disabled}
            onChange={() => {
              setChecked(!checked);
              onToggle();
            }}
          />
          <span className="slider"></span>
        </ToggleContainerXs>
        <StatusText font={font} className="status-text">
          {checked ? onText : offText}
        </StatusText>
      </ToggleWrapperXs>
    </Fragment>
  );
};
