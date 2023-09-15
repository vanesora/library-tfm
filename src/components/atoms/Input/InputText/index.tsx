import React, { useState, useEffect, useContext } from "react";
import { Input } from "../styles";
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
  hasCustomValidationError = false,
}: IInputTextProps) => {
  const [val, setVal] = useState<string>(value);
  const [shouldValidate, setShouldValidate] = useState<boolean>(true);
  const [hasError, setHasError] = useState<boolean>(false);

  useState<boolean>(false);
  const [textRegex, setTextRegex] = useState<RegExp | null>(
    regex ? new RegExp(regex) : null
  );

  const validateInput = () => {
    setHasError(false);
    if (shouldValidate) {
      if (textRegex !== null && !textRegex.test(val)) {
        setHasError(true);
        errorCallback("regExp");
      }
      if (required && val === "") {
        setHasError(true);
        errorCallback("required");
      }
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => validateInput(), 800);
    return () => clearTimeout(timer);
  }, [val, required]);

  useEffect(() => {
    setVal(value);
    setTextRegex(regex ? new RegExp(regex) : null);
  }, [value]);

  return (
    <Input
      type="text"
      disabled={disabled}
      placeholder={placeholder}
      readOnly={readOnly}
      required={required}
      value={val}
      hasError={hasError || hasCustomValidationError}
      onChange={(e) => {
        setShouldValidate(true);
        setVal(e.target.value);
        onChange(e.target.value);
      }}
    />
  );
};
