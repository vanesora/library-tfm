import React, { useState, useEffect, useContext } from "react";
import { Input, InputWrapper, StyledInput } from "../styles";
import { IInputProps } from "../InputTypes";

export interface IInputTextProps extends IInputProps {
  value?: string;
}

export const AtomInputText = ({
  disabled = false,
  placeholder = "",
  readOnly = false,
  required = false,
  value = "",
  onChange = () => {},
  errorCallback = () => {},
  regex,
}: IInputTextProps) => {
  const [inputValue, setInputValue] = useState<string>(value);
  const [error, setError] = useState<boolean>(false);

  const [textRegex, setTextRegex] = useState<RegExp | null>(
    regex ? new RegExp(regex) : null
  );

  const handleInputChange = (e: any) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    onChange && onChange(e.target.value);
  };

  const handleBlur = () => {
    setError(false);
      if (textRegex !== null && !textRegex.test(inputValue)) {
        setError(true);
        errorCallback("regExp");
      }
      if (required && inputValue === "") {
        setError(true);
        errorCallback("required");
      }
  };

  return (
    <InputWrapper error={error} readOnly={readOnly}>
      <StyledInput
        type="text"
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
