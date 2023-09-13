/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React, { useContext } from "react";
import { ThemeContext } from "context/context";
import { RadioContainer, RadioInput, RadioLabel, RadioCheck } from "./style";
import { CSSProperties } from "styled-components";

export interface IRadioProps {
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
  label?: string;
  isChecked?: boolean;
  customLabelStyle?: CSSProperties;
  customRadioStyles?: CSSProperties;
  customRadioCheckStyles?: CSSProperties;
}

export const AtomRadio = ({
  label = "",
  isChecked = false,
  disabled = false,
  onChange,
  value,
  customLabelStyle,
  customRadioStyles,
  customRadioCheckStyles,
}: IRadioProps): JSX.Element => {
  const { palette } = useContext(ThemeContext);
  const { fontFamily } = useContext(ThemeContext);

  return (
    <RadioContainer data-testId="container" onClick={() => onChange(value)} colors={palette}>
      <RadioInput
        data-testId="radio"
        disabled={disabled}
        style={customRadioStyles}
        colors={palette}
      >
        {isChecked ? (
          <RadioCheck
            data-testId="checked"
            disabled={disabled}
            style={customRadioCheckStyles}
            colors={palette}
          />
        ) : null}
      </RadioInput>
      {!!label && (
        <RadioLabel
          disabled={disabled}
          fontFamily={fontFamily}
          style={customLabelStyle}
          colors={palette}
        >
          {label}
        </RadioLabel>
      )}
    </RadioContainer>
  );
};
