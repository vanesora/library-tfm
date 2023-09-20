import React, { useContext, useEffect, useState } from "react";
import { InputWrapper, StyledInput } from "../styles";
import { IInputProps } from "../InputTypes";

export interface IInputEmailProps extends IInputProps {
  value?: string;
}

export const AtomInputEmail = ({
  disabled = false,
  placeholder = "Email",
  readOnly = false,
  required = false,
  value = "",
  regex,
  onChange = () => {},
  errorCallback = () => {},
}: IInputEmailProps) => {
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+?/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]{2,3}){1,2}$/;
  const [inputValue, setInputValue] = useState(value);
  const [error, setError] = useState(false);
  const [textRegex, setTextRegex] = useState<RegExp>(
    regex ? new RegExp(regex) : new RegExp(emailRegex) 
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
