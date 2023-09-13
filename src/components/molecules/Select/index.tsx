import React from "react";
import { AtomCaption } from "react/atoms/Typography/Caption";
import { AtomSelect } from "react/atoms/Select";
import { AtomBody } from "react/atoms/Typography/Body";
import { SelectContainer, SelectWrapper } from "./styles";
import { keysTheme } from "data/dataMx";

export interface ISelectProps {
  /** Select items */
  items: Array<string | number>;
  /** Initial value of select */
  value: string | number;
  /** Select label */
  label?: string;
  /** Select label color */
  labelColor?: keysTheme;
  /** Select helper text */
  helperText?: string;
  /** Select color helper text */
  helperTextColor?: keysTheme;
  /** Set if select is disabled */
  disabled?: boolean;
  /** Function to change value of select */
  onChange?: (value: string) => any;
}

export const MoleculeSelect = ({
  items,
  label = "",
  labelColor = "neutral700",
  value,
  helperText = "",
  helperTextColor,
  disabled = false,
  onChange,
}: ISelectProps) => {
  return (
    <SelectContainer>
      {label && (
        <SelectWrapper>
          <AtomCaption
            size={"xlarge"}
            text={label}
            weight="regular"
            color={labelColor}
          />
        </SelectWrapper>
      )}
      <SelectWrapper>
        <AtomSelect
          items={items}
          value={value}
          disabled={disabled}
          onChangeValue={onChange}
        />
      </SelectWrapper>
      {helperText && (
        <AtomBody
          text={helperText}
          size={"small"}
          align={"left"}
          color={helperTextColor}
        />
      )}
    </SelectContainer>
  );
};
