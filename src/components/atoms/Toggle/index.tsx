/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React, { useContext, useState, Fragment, useEffect } from "react";
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
  const [checked, setChecked] = useState<boolean>(isChecked);

  useEffect(() => {
    setChecked(isChecked);
  }, [isChecked]);

  return (
    <Fragment>
      {labelText && <LabelTextXs>{labelText}</LabelTextXs>}
      <ToggleWrapperXs className="toggle-wrapper" focus={focus}>
        <ToggleContainerXs size={size} focus={focus}>
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
        <StatusText className="status-text">
          {checked ? onText : offText}
        </StatusText>
      </ToggleWrapperXs>
    </Fragment>
  );
};
