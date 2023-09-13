import React, { useContext, useEffect, useState } from "react";
import { InputNumber } from "./styles";
import { ErrorsInput, IInputProps } from "interfaces";
import { ThemeContext } from "context/context";

export interface IInputNumberProps extends IInputProps {
  /** Initial value */
  value?: string;
  /** Min value */
  min?: string;
  /** Max value */
  max?: string;
}

export const AtomInputNumber = ({
  disabled = false,
  placeholder = "",
  readOnly = false,
  required = false,
  regex = "^[0-9]+$",
  value = "",
  min,
  max,
  onChange = () => {},
  errorCallback = () => {},
  styles = {},
  hasCustomValidationError = false,
}: IInputNumberProps) => {
  const [val, setVal] = useState<string>(value);
  const [hasError, setHasError] = useState<boolean>(false);
  const [shouldValidate, setShouldValidate] = useState<boolean>(true);
  const [numberRegex, setNumberRegex] = useState<RegExp | null>(
    regex ? new RegExp(regex) : null
  );

  const { palette } = useContext(ThemeContext);

  const validateInput = () => {
    setHasError(false);
    if (shouldValidate) {
      let error: ErrorsInput = null;
      const intValue = parseInt(val);
      if (intValue < parseInt(min!)) {
        setHasError(true);
        error = "min";
      }
      if (intValue > parseInt(max!)) {
        setHasError(true);
        error = "max";
      }
      if (numberRegex != null && val !== "" && !numberRegex.test(val)) {
        setHasError(true);
        error = "regExp";
      }

      if (required && val === "") {
        setHasError(true);
        error = "required";
      }
      error !== null && errorCallback && errorCallback(error);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => validateInput(), 800);
    return () => clearTimeout(timer);
  }, [val, required]);

  useEffect(() => {
    setVal(value);
  }, [value]);

  useEffect(() => {
    validateInput();
  }, [val, required]);

  return (
    <InputNumber
      colorPalette={palette}
      type="number"
      hasError={hasError || hasCustomValidationError}
      disabled={disabled}
      placeholder={placeholder}
      readOnly={readOnly}
      required={required}
      value={val}
      min={min}
      max={max}
      onChange={(e) => {
        setShouldValidate(true);
        setVal(e.target.value);
        onChange(e.target.value);
      }}
      styles={styles}
    />
  );
};
