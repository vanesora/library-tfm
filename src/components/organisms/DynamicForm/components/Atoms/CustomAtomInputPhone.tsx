import React, { useState, useEffect, useMemo } from "react";
import { AtomInputPhone, IInputPhoneProps } from "react/atoms/Input/InputPhone";
import isError from "../../helpers/isError";

function getCountryAndPhone(defaultValue: string): {
  defaultCountry: string;
  defaultPhone: string;
} {
  let defaultCountry = "";
  let i = 0;
  while (i < defaultValue.length && defaultValue[i] !== "-") {
    defaultCountry += defaultValue[i];
    i++;
  }
  i++;
  let defaultPhone = "";
  while (i < defaultValue.length) {
    defaultPhone += defaultValue[i];
    i++;
  }
  return { defaultCountry, defaultPhone };
}

export const CustomAtomInputPhone: React.FC<{
  defaultValue?: string;
  required: IInputPhoneProps["required"];
  disabled: IInputPhoneProps["disabled"];
  onChange: (value: string) => void;
  regex: string;
  onError: (value: boolean) => void;
  minLength?: number;
  maxLength?: number;
}> = ({
  defaultValue = "",
  required,
  disabled,
  onChange,
  regex,
  onError,
  minLength,
  maxLength,
}) => {
  const { defaultCountry, defaultPhone } = getCountryAndPhone(defaultValue);

  const [currentPhone, setCurrentPhone] = useState<string>(defaultPhone);
  const [currentCountry, setCurrentCountry] = useState<string>(defaultCountry);

  const onChangePhone = (phone: string): void => {
    onError(isError(phone, regex, required, minLength, maxLength));
    setCurrentPhone(phone);
  };

  const onChangeCountry = (country: string): void => {
    setCurrentCountry(country);
  };

  useEffect(() => {
    if (currentPhone !== "" && currentCountry !== "") {
      onChange(currentCountry + "-" + currentPhone);
    }
  }, [currentPhone, currentCountry, onChange]);

  return (
    <AtomInputPhone
      onChangePhone={onChangePhone}
      onChangeCountry={onChangeCountry}
      country={currentCountry}
      phone={currentPhone}
      helperText={""}
      required={required}
      disabled={disabled}
    />
  );
};
