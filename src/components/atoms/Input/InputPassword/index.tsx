/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useEffect, useState, useContext } from "react";
import { InputContainer, InputPassword, ShowPassword } from "./styles";
import { AtomIcon } from "react/atoms/Icon";
import { IInputProps, ErrorsInput } from "interfaces";
import { ThemeContext } from "context/context";

export interface IInputPasswordProps extends IInputProps {
  value?: string;
}

export const AtomInputPassword = ({
  disabled = false,
  placeholder = "",
  required = false,
  value = "",
  regex,
  styles = {},
  onChange = () => {},
  errorCallback = () => {},
  hasCustomValidationError = false,
}: IInputPasswordProps): JSX.Element => {
  const { palette } = useContext(ThemeContext);
  const [val, setVal] = useState<string>(value);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);
  const [shouldValidate, setShouldValidate] = useState<boolean>(true);
  const [passwordRegex, setpasswordRegex] = useState<RegExp | null>(
    regex != null ? new RegExp(regex) : null
  );

  useEffect(() => {
    setVal(value);
    setpasswordRegex(regex ? new RegExp(regex) : null);
  }, [value]);

  useEffect(() => {
    const timer = setTimeout(() => validateInput(), 800);
    return () => clearTimeout(timer);
  }, [val, required]);

  const validateInput = () => {
    setHasError(false);
    if (shouldValidate) {
      if (val && passwordRegex !== null && !passwordRegex.test(val)) {
        setHasError(true);
        errorCallback("regExp");
      }
      if (required && val === "") {
        setHasError(true);
        errorCallback("required");
      }
    }
  };

  return (
    <>
      <InputContainer>
        <InputPassword
          data-testid="input-password"
          type={!showPassword ? "password" : "text"}
          disabled={disabled}
          placeholder={placeholder}
          hasError={hasError || hasCustomValidationError}
          required={required}
          value={val}
          colors={palette}
          onChange={(e) => {
            setShouldValidate(true);
            setVal(e.target.value);
            onChange(e.target.value);
          }}
          styles={styles}
        />
        <ShowPassword
          id="showPassword"
          onClick={() => {
            if (!disabled) {
              setShowPassword(!showPassword);
            }
          }}
        >
          {!showPassword ? (
            <AtomIcon
              icon="eye-off"
              size={20}
              color={disabled ? "neutral400" : "neutral600"}
            />
          ) : (
            <AtomIcon
              icon="eye-on"
              size={20}
              color={disabled ? "neutral400" : "neutral600"}
            />
          )}
        </ShowPassword>
      </InputContainer>
    </>
  );
};
