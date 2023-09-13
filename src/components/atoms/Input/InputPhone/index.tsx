import React, { useEffect, useState } from "react";
import { AtomCaption } from "react/atoms/Typography/Caption";
import { ContainerCountryPicker, ContainerInput, InputPhone } from "./styles";
import { AtomCountryPicker } from "react/atoms/CountryPicker";
import { IInputAlign } from "./InputPhoneTypes";
import { AtomInputNumber } from "react/atoms/Input/InputNumber";
import { ErrorsInput, ICountriesProps, IInputProps } from "interfaces";

export interface IInputPhoneProps extends IInputProps {
  /** Alignment of the country picker and the input number */
  align?: IInputAlign;
  /** Country codes array that will appear first */
  importantCountries?: string[];
  /** Country picker title */
  labelCountryPicker?: string;
  /** Phone title */
  labelPhone?: string;
  /** Text when no country code is selected */
  placeholderCountryP?: string;
  /** Initial input country value */
  country: string;
  /** Initial input phone value */
  phone: string;
  /** Helper text in phone input */
  helperText: string;
  /** Action of changing inputPhone value */
  onChangePhone?: (value: any) => void;
  /** Action of changing inputCountry value */
  onChangeCountry?: (value: any) => void;
}

export const AtomInputPhone = ({
  align = "default",
  disabled = false,
  importantCountries,
  labelCountryPicker = "Country Picker",
  labelPhone = "Phone Number",
  placeholder = "Type your phone number",
  placeholderCountryP = "Type here to search",
  country = "",
  phone = "",
  helperText,
  readOnly = false,
  regex = "^[0-9]+$",
  required = false,
  onChangePhone = () => {},
  onChangeCountry = () => {},
  errorCallback = () => {},
  styles = {},
  hasCustomValidationError = false,
}: IInputPhoneProps) => {
  const [valPhone, setValPhone] = useState<string>(phone);
  const [valCountry, setValCountry] = useState<string>(country);
  const [hasError, setHasError] = useState({ country: false, phone: false });
  const [shouldValidate, setShouldValidate] = useState<boolean>(true);
  const [phoneRegex, setPhoneRegex] = useState<RegExp | null>(
    regex ? new RegExp(regex) : null
  );

  const validateInput = (): void => {
    let error: ErrorsInput = null;
    let errorPhone = false;
    let errorCountry = false;
    if (shouldValidate) {
      if (
        valPhone !== "" &&
        phoneRegex !== null &&
        !phoneRegex.test(valPhone)
      ) {
        errorPhone = true;
        error = "regExp";
      }
      if (required) {
        if (valPhone === "") {
          errorPhone = true;
          error = "required";
        }
        if (valCountry === "") {
          errorCountry = true;
          error = "required";
        }
      }

      setHasError({ phone: errorPhone, country: errorCountry });
      error !== null && errorCallback && errorCallback(error);
    }
  };

  const handleChange = (key: string, value: any): void => {
    if (key === "phone") {
      setValPhone(value);
      onChangePhone(value);
    } else if (key === "country") {
      setValCountry(value.id);
      onChangeCountry(`+${value.code}`);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => validateInput(), 800);
    return () => clearTimeout(timer);
  }, [valPhone, valCountry, required]);

  useEffect(() => {
    setPhoneRegex(regex ? new RegExp(regex) : null);
  }, [regex]);

  return (
    <InputPhone align={align}>
      <ContainerCountryPicker align={align}>
        <AtomCaption
          size="large"
          text={labelCountryPicker}
          weight="light"
          styles={{ marginBottom: "5px" }}
        />
        <AtomCountryPicker
          data-testid="atom-country-picker"
          disabled={disabled}
          readOnly={readOnly}
          hasError={hasError.country || hasCustomValidationError}
          placeholder={placeholderCountryP}
          importantItems={importantCountries}
          viewCountry={align !== "short"}
          value={valCountry}
          minWidth={align !== "short" ? "200px" : undefined}
          onChange={(value: ICountriesProps) => {
            handleChange("country", value);
            setShouldValidate(true);
          }}
          styles={styles}
        />
      </ContainerCountryPicker>
      <ContainerInput align={align}>
        <AtomCaption
          size="large"
          text={labelPhone}
          weight="light"
          styles={{ marginBottom: "5px" }}
        />
        <AtomInputNumber
          disabled={disabled}
          placeholder={placeholder}
          readOnly={readOnly}
          required={required}
          value={valPhone}
          onChange={(e) => {
            handleChange("phone", e.toString());
          }}
          regex={regex}
          styles={styles}
          hasCustomValidationError={hasError.phone || hasCustomValidationError}
        />
        {helperText !== undefined && helperText !== "" && !readOnly && (
          <AtomCaption
            size="medium"
            text={helperText}
            weight="light"
            color={"neutral600"}
          />
        )}
      </ContainerInput>
    </InputPhone>
  );
};
