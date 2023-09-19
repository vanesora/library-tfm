import React, { useEffect, useState, useContext } from "react";
import { InputContainer, InputPassword, ShowPassword } from "./styles";
import { IInputProps } from "../InputTypes";
import { AtomIcon } from "../../Icon";
import { InputWrapper, StyledInput } from "../styles";

export interface IInputPasswordProps extends IInputProps {
  value?: string;
}

export const AtomInputPassword = ({
  disabled = false,
  placeholder = "",
  required = false,
  value = "",
  regex,
  readOnly = false,
  onChange = () => {},
  errorCallback = () => {},
}: IInputPasswordProps): JSX.Element => {
  const [inputValue, setInputValue] = useState<string>(value);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [passwordRegex, setpasswordRegex] = useState<RegExp | null>(
    regex != null ? new RegExp(regex) : null
  );

  const handleInputChange = (e: any) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    onChange && onChange(e.target.value);
  };

  const handleBlur = () => {
    setError(false);
    if (inputValue && passwordRegex !== null && !passwordRegex.test(inputValue)) {
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
        data-testid="input-password"
        type={!showPassword ? "password" : "text"}
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
            size={"medium"}
            color={disabled ? "#8b8888" : "#767171"}
          />
        ) : (
          <AtomIcon
            icon="eye-on"
            size={"medium"}
            color={disabled ? "#8b8888" : "#767171"}
          />
        )}
      </ShowPassword>
    </InputWrapper>
  );
};
