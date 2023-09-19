import React, { useContext, useEffect, useState } from "react";
import { ErrorsInput, IInputProps } from "../InputTypes";
import { Input, InputWrapper, StyledInput } from "../styles";

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
}: IInputNumberProps) => {
  const [inputValue, setInputValue] = useState<string>(value);
  const [error, setError] = useState<boolean>(false);
  const [shouldValidate, setShouldValidate] = useState<boolean>(true);

  const handleInputChange = (e: any) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    onChange && onChange(e.target.value);
  };


  const handleBlur = () => {
    setError(false);
    if (shouldValidate) {
      let error: ErrorsInput = null;
      const intValue = parseInt(inputValue);
      if (intValue < parseInt(min!)) {
        setError(true);
        error = "min";
      }
      if (intValue > parseInt(max!)) {
        setError(true);
        error = "max";
      }
      const pattern = new RegExp(regex);
      if (pattern != null && inputValue !== "" && !pattern.test(inputValue)) {
        setError(true);
        error = "regExp";
      }
      if (required && inputValue === "") {
        setError(true);
        error = "required";
      }
      error !== null && errorCallback && errorCallback(error);
    }
  };

  return (
    <InputWrapper error={error} readOnly={readOnly}>
      <StyledInput
        type="number"
        disabled={disabled}
        placeholder={placeholder}
        readOnly={readOnly}
        value={inputValue}
        error={error}
        onChange={handleInputChange}
        onBlur={handleBlur}
        onFocus={() => {
          setError(false);
          errorCallback(null);
        }}
      />
    </InputWrapper>
  );
};
