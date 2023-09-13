import React, { Fragment, useState, useEffect } from "react";
import { AtomCaption } from "react/atoms/Typography/Caption";
import { HelperTextContainer } from "./styles";
import { IInputDateSort, IInputType } from "react/atoms/Input/InputTypes";
import { IInputProps } from "interfaces";
import { AtomInputText } from "react/atoms/Input/InputText";
import { AtomInputPhone } from "react/atoms/Input/InputPhone";
import { IInputAlign } from "react/atoms/Input/InputPhone/InputPhoneTypes";
import { AtomInputPassword } from "react/atoms/Input/InputPassword";
import { AtomInputNumber } from "react/atoms/Input/InputNumber";
import { AtomInputEmail } from "react/atoms/Input/InputEmail";
import { AtomInputDate } from "react/atoms/Input/InputDate";

export interface IMoleculeInputProps extends IInputProps {
  label?: string;
  helperText?: string;
  type?: IInputType;
  alignPhone?: IInputAlign;
  importantCountries?: string[];
  labelCountryPicker?: string;
  placeholderCountryP?: string;
  country?: string;
  phone?: string;
  value?: string;
  minYear?: string;
  maxYear?: string;
  sort?: IInputDateSort;
}

export const MoleculeInput = ({
  label = "",
  helperText = "",
  value,
  alignPhone = "default",
  importantCountries,
  labelCountryPicker,
  placeholderCountryP,
  regex = "",
  readOnly = false,
  required = false,
  placeholder = "",
  disabled = false,
  type = "Text",
  country = "",
  phone = "",
  minYear,
  maxYear,
  styles,
  sort,
  onChange = () => {},
  errorCallback,
}: IMoleculeInputProps) => {
  const [typeInput, setTypeInput] = useState<string>(type);

  useEffect(() => {
    setTypeInput(type);
  }, [type]);

  let InputLocal;
  switch (type) {
    case "Text":
      InputLocal = (
        <AtomInputText
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
          styles={styles}
        />
      );
      break;
    case "Phone":
      InputLocal = (
        <AtomInputPhone
          regex={regex}
          country={country}
          phone={phone}
          readOnly={readOnly}
          required={required}
          placeholder={placeholder}
          disabled={disabled}
          onChange={(e) => {
            onChange(e);
          }}
          errorCallback={errorCallback}
          align={alignPhone}
          importantCountries={importantCountries}
          labelCountryPicker={labelCountryPicker}
          placeholderCountryP={placeholderCountryP}
          labelPhone={label}
          helperText={helperText}
          styles={styles}
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
          styles={styles}
        />
      );
      break;
    case "Number":
      InputLocal = (
        <AtomInputNumber
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
          styles={styles}
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
          styles={styles}
        />
      );
      break;
    case "Date":
      InputLocal = (
        <AtomInputDate
          date={value}
          minYear={minYear}
          maxYear={maxYear}
          disabled={disabled}
          readOnly={readOnly}
          required={required}
          sort={sort}
          onChange={(e) => {
            onChange(e);
          }}
          styles={styles}
        />
      );
  }
  return (
    <Fragment>
      {label !== "" && type !== "Phone" && (
        <AtomCaption size="large" text={label} weight="light" />
      )}
      {InputLocal}
      {helperText !== "" && readOnly == false && type !== "Phone" && (
        <HelperTextContainer>
          <AtomCaption
            size="medium"
            text={helperText}
            color={"neutral600"}
            weight="light"
          />
        </HelperTextContainer>
      )}
    </Fragment>
  );
};
