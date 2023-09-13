import React, { useState, useEffect } from "react";
import {
  IRequiredDataElement,
  ISchemaValidationFieldItems,
} from "../../interfaces/schemas";
import { AtomInputText } from "react/atoms/Input/InputText";
import { AtomSelect } from "react/atoms/Select";
import { AtomInputDate } from "react/atoms/Input/InputDate";
import { AtomInputPassword } from "react/atoms/Input/InputPassword";
import { AtomCheckbox } from "react/atoms/Checkbox";
import { CustomAtomInputPhone } from "../Atoms/CustomAtomInputPhone";
import isError from "../../helpers/isError";
import { AtomInputNumber } from "react/atoms/Input/InputNumber";

function sortByOrder(items: ISchemaValidationFieldItems[]): string[] {
  items.sort(function comparator(
    first: ISchemaValidationFieldItems,
    second: ISchemaValidationFieldItems
  ) {
    return first.order - second.order;
  });
  return items.map((item) => item.value);
}

function isErrorEasyCall(
  value: string,
  regex: string,
  dataElement: IRequiredDataElement
): boolean {
  return isError(
    value,
    regex,
    dataElement.field_required,
    dataElement.field_min_length,
    dataElement.field_max_length
  );
}

export const TransformDataElementToComponent: React.FC<{
  onChange: (value: string | boolean) => void;
  dataElement: IRequiredDataElement;
  onError: (value: boolean) => void;
}> = ({ onChange, dataElement, onError }) => {
  const { field_type } = dataElement;
  // Assign the value in the default value
  useEffect(function DefaultValue() {
    const defaultValue = dataElement.default_value ?? "";
    if (defaultValue !== "") {
      onChange(defaultValue);
    }
    if (dataElement.field_required) {
      onError(defaultValue === "");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const isDisabled = !(dataElement.allow_edit ?? true);
  const regex = dataElement.field_regex ?? "";
  switch (field_type) {
    case "text":
      return (
        <AtomInputText
          type="Text"
          placeholder={dataElement.place_holder}
          required={dataElement.field_required}
          disabled={isDisabled}
          value={dataElement.default_value}
          onChange={(value: string) => {
            onError(isErrorEasyCall(value, regex, dataElement));
            onChange(value);
          }}
        />
      );
    case "password":
      return (
        <AtomInputPassword
          value={dataElement.default_value}
          regex={regex}
          required={dataElement.field_required}
          onChange={(value: string) => {
            onError(isErrorEasyCall(value, regex, dataElement));
            onChange(value);
          }}
          disabled={isDisabled}
        />
      );
    case "date":
      return (
        <AtomInputDate
          required={dataElement.field_required}
          onChange={(date) => {
            onError(date === "Invalid date");
            onChange(date);
          }}
          sort={dataElement.field_format}
          disabled={isDisabled}
          date={dataElement.default_value ?? ""}
        />
      );
    case "select":
      return (
        <AtomSelect
          items={sortByOrder(dataElement.field_items ?? [])}
          value={dataElement.default_value ?? ""}
          onChangeValue={(value) => {
            onError(false);
            onChange(value);
          }}
          required={dataElement.field_required}
          disabled={isDisabled}
        />
      );
    case "phone": {
      return (
        <CustomAtomInputPhone
          onChange={onChange}
          onError={onError}
          regex={regex}
          minLength={dataElement.field_min_length}
          maxLength={dataElement.field_max_length}
          defaultValue={dataElement.default_value}
          required={dataElement.field_required}
          disabled={isDisabled}
        />
      );
    }
    case "checkbox":
      return (
        <AtomCheckbox
          label={dataElement.text}
          onChange={onChange}
          disabled={isDisabled}
        />
      );
    case "number":
      return (
        <AtomInputNumber
          required={dataElement.field_required}
          disabled={isDisabled}
          regex={regex}
          onChange={(value) => {
            onChange(value);
            onError(isErrorEasyCall(value, regex, dataElement));
          }}
        />
      );
    default:
      return <></>;
  }
};
