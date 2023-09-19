import React, { Fragment, useState, useEffect } from "react";
import { HelperTextContainer } from "./styles";
import { IInputProps, IInputType } from "../../atoms/Input/InputTypes";
import { AtomInputText } from "../../atoms/Input/InputText";
import { AtomInputPassword } from "../../atoms/Input/InputPassword";
import { AtomInputNumber } from "../../atoms/Input/InputNumber";
import { AtomInputEmail } from "../../atoms/Input/InputEmail";
import { AtomLabel } from "../../atoms/Typography/Label";
import { AtomTextError } from "../../atoms/Typography/TextError";

export interface IMoleculeInputProps extends IInputProps {
  name: string;
  label?: string;
  helperText?: string;
  type?: IInputType;
  value?: string;
  theme: 'light' | 'dark'
}

export const MoleculeInput = ({
  name,
  label = "",
  helperText = "",
  value,
  regex = "",
  readOnly = false,
  required = false,
  placeholder = "",
  disabled = false,
  type = "Text",
  theme= 'light',
  onChange = () => {},
  errorCallback = () => {},
}: IMoleculeInputProps) => {

  let InputLocal;
  switch (type) {
    case "Text":
      InputLocal = (
        <AtomInputText
          name={name}
          regex={regex}
          value={value}
          readOnly={readOnly}
          required={required}
          placeholder={placeholder}
          disabled={disabled}
          onChange={(e) => {
            onChange(e);
          }}
          errorCallback={errorCallback}
        />
      );
      break;
    case "Password":
      InputLocal = (
        <AtomInputPassword
          regex={regex}
          value={value}
          readOnly={readOnly}
          required={required}
          placeholder={placeholder}
          disabled={disabled}
          onChange={(e) => {
            onChange(e);
          }}
          errorCallback={errorCallback}
        />
      );
      break;
    case "Number":
      InputLocal = (
        <AtomInputNumber
          name={name}
          regex={regex}
          value={value}
          readOnly={readOnly}
          required={required}
          placeholder={placeholder}
          disabled={disabled}
          onChange={(e) => {
            onChange(e);
          }}
          errorCallback={errorCallback}
        />
      );
      break;
    case "Email":
      InputLocal = (
        <AtomInputEmail
          regex={regex}
          value={value}
          readOnly={readOnly}
          required={required}
          placeholder={placeholder}
          disabled={disabled}
          onChange={(e) => {
            onChange(e);
          }}
          errorCallback={errorCallback}
        />
      );
      break;
  }
  return (
    <Fragment>
      {label !== "" && (
        <AtomLabel size="large" text={label} color={theme === 'light'? '#090088' : 'white'} />
      )}
      {InputLocal}
      {helperText !== "" && readOnly === false && (
        <HelperTextContainer>
          <AtomTextError
            size="medium"
            text={helperText}
            align="left"
          />
        </HelperTextContainer>
      )}
    </Fragment>
  );
};
