/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React, { useContext, useState, Fragment, useEffect } from "react";
import { HiddenInput, Slider, Text, ToggleSwitchContainer } from "./styles";

export interface IToggleProps {
  isChecked?: boolean;
  disabled?: boolean;
  size?: "small" | "medium";
  text?: string;
  onToggle: (e?: any) => void;
}

export const AtomToggle = ({
  isChecked = false,
  disabled = false,
  size = "small",
  text,
  onToggle,
}: IToggleProps): JSX.Element => {
  const [_isChecked, setIsChecked] = useState(isChecked);

  const handleToggle = () => {
    if (!disabled) {
      setIsChecked(!isChecked);
      onToggle && onToggle(!isChecked)
    }
  };

  return (
    <ToggleSwitchContainer size={size}>
      <HiddenInput disabled={disabled} checked={isChecked} onChange={handleToggle} />
      <Slider disabled={disabled} />
      {text && <Text disabled={disabled}>{text}</Text>}
    </ToggleSwitchContainer>
  );
};
