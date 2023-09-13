import React, { useEffect, useState, useContext } from "react";
import { CheckboxContainer, Input } from "./styles";
import { CSSObject } from "styled-components";
import { AtomBody } from "../Typography/Body";
import { ThemeContext } from "context/context";

export interface ICheckboxProps {
  /** Active if you want to active the checkbox */
  checked?: boolean;
  /** On Change input element */
  onChange?: (event: boolean) => void;
  /** Disabled checkbox if it is active */
  disabled?: boolean;
  value?: any;
  /** Styles in format CSSObject */
  styles?: CSSObject;
  label?: string;
}

export const AtomCheckbox: React.FC<ICheckboxProps> = ({
  checked = false,
  onChange,
  disabled = false,
  value = "",
  styles = {},
  label = "",
}) => {
  const [isChecked, setIsChecked] = useState<boolean>(checked);

  useEffect(() => {
    setIsChecked(checked);
  }, [checked]);

  const handleChange = (isChecked: boolean): void => {
    if (!disabled) {
      setIsChecked(isChecked);
      onChange?.(isChecked);
    }
  };

  const { palette } = useContext(ThemeContext);

  return (
    <CheckboxContainer>
      <Input
        type="checkbox"
        checked={isChecked}
        disabled={disabled}
        onChange={() => handleChange(!isChecked)}
        color={palette.neutral700}
        colorDisabled={palette.neutral500}
        value={value}
        styles={styles}
      />
      <AtomBody
        align="left"
        color={"neutral600"}
        size="medium"
        text={label}
        weight="regular"
        styles={{
          marginLeft: "19px",
        }}
        onClick={() => {
          handleChange(!isChecked);
        }}
      />
    </CheckboxContainer>
  );
};
