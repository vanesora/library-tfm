import React, { useState, useContext, useEffect } from "react";
import { ThemeContext } from "context/context";
import {
  Select,
  Options,
  Option,
  Value,
  AllScreen,
  SelectContainer,
} from "./styles";
import { AtomBody } from "react/atoms/Typography/Body";
import { ErrorsInput } from "interfaces";
import { CSSObject } from "styled-components";
import { AtomIcon } from "../Icon";

export interface IAtomSelectProps {
  /** Array of options */
  items: Array<string | number>;
  /** Value option by default */
  value: string | ReadonlyArray<string> | number;
  /** Disabled flag by default */
  disabled?: boolean;
  /** Func onChangeValue */
  onChangeValue?: (value: string) => any;
  /** Width component by default */
  width?: string;
  /** Height component by default */
  height?: string;
  required?: boolean;
  readOnly?: boolean;
  styles?: CSSObject;
  errorCallback?: (value: string) => any;
  zIndexOptions?: number;
  isValuePlaceHolder?: boolean;
  /** Must be true when a custom validation fails */
  hasCustomValidationError?: boolean;
}

export const AtomSelect = ({
  items,
  value,
  disabled = false,
  required = false,
  readOnly = false,
  styles,
  onChangeValue = () => {},
  errorCallback = () => {},
  width = "280px",
  height = "56px",
  isValuePlaceHolder = true,
  hasCustomValidationError = false,
}: IAtomSelectProps) => {
  const { fontFamily, palette } = useContext(ThemeContext);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [valueOption, setValueOption] = useState<
    string | ReadonlyArray<string> | number
  >(value);
  const [placeHolderColor, setPlaceHolderColor] =
    useState<boolean>(isValuePlaceHolder);
  const [isPlaceHolder, setIsPlaceHolder] =
    useState<boolean>(isValuePlaceHolder);
  const [hasError, setHasError] = useState<boolean>(false);

  const handleChange = (option: string) => {
    setIsActive(false);
    onChangeValue && onChangeValue(option);
    setValueOption(option);
    setPlaceHolderColor(false);
    setIsPlaceHolder(false);
  };

  const validateSelect = () => {
    setHasError(false);
    if (required) {
      if (isPlaceHolder && valueOption) {
        setHasError(true);
        errorCallback("required");
        setIsPlaceHolder(false);
      }
      if (!valueOption) {
        setHasError(true);
        errorCallback("required");
      }
    }
  };

  useEffect(() => {
    validateSelect();
  }, [valueOption]);

  useEffect(() => {
    setIsPlaceHolder(isValuePlaceHolder);
    validateSelect();
  }, [required]);

  useEffect(() => {
    setValueOption(value);
  }, [value]);

  return (
    <>
      <Select
        colorPalette={palette}
        disabled={disabled}
        width={width}
        height={height}
        hasError={hasError || hasCustomValidationError}
        readOnly={readOnly}
        styles={styles}
      >
        <SelectContainer
          colorPalette={palette}
          onClick={
            !disabled && !readOnly ? () => setIsActive(!isActive) : () => {}
          }
          disabled={disabled}
          styles={styles}
        >
          <Value
            colorPalette={palette} 
            font={fontFamily.main.regular}
            disabled={disabled}
            data-testid="select-atom"
            placeholderColor={placeHolderColor}
          >
            {valueOption || "Select one"}
          </Value>
          <AtomIcon
            icon={"keyboard_arrow_down"}
            size={10}
            color={"neutral600"}
          />
        </SelectContainer>
        {isActive && !disabled && (
          <Options selectHeight={height}>
            {items.map((item, index) => {
              const itemString = item.toString();
              return (
                <Option colorPalette={palette} key={index} onClick={() => handleChange(itemString)}>
                  <AtomBody
                    size="large"
                    text={itemString}
                    align="left"
                    weight="regular"
                    color={"neutral700"}
                  />
                </Option>
              );
            })}
          </Options>
        )}
      </Select>
      {isActive && <AllScreen colorPalette={palette} onClick={() => setIsActive(!isActive)} />}
    </>
  );
};
