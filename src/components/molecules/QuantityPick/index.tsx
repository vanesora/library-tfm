import React, { useState, useEffect, useContext } from "react";
import { AtomButtonIcon } from "react/atoms/Buttons/Icon";
import { AtomInputNumber } from "react/atoms/Input/InputNumber";
import { QuantityContainer, InputContainer, ButtonContainer } from "./styles";
import { ThemeContext } from "context/context";

export interface IQuantityProps {
  /** Number Input value */
  value: string;
  /** Minimum possible value */
  min?: string;
  /** Maximum value */
  max: string;
  /** Action called after click the minus button */
  onRemove: () => void;
  /** Action called after click the plus button */
  onAdd: () => void;
  /** Action called after change the input value directly */
  onChange: () => void;
}

export const MoleculeQuantityPick = ({
  value,
  min = "0",
  max,
  onRemove,
  onAdd,
  onChange,
}: IQuantityProps) => {
  const [val, setVal] = useState<string>(value);
  const [numberValue, setNumberValue] = useState<number>(parseInt(value));

  const { palette } = useContext(ThemeContext);

  const handleAdd = () => {
    const newVal = numberValue + 1;

    if (newVal <= parseInt(max)) {
      setNumberValue(newVal);
      setVal(newVal.toString());
    }

    onAdd();
  };

  const handleRemove = () => {
    const newVal = numberValue === 0 ? 0 : numberValue - 1;

    if (newVal >= parseInt(min)) {
      setNumberValue(newVal);
      setVal(newVal.toString());
    }
    onRemove();
  };

  const handleChange = (v: number) => {
    const changedVal = isNaN(v) ? 0 : v;
    const minVal = parseInt(min);
    const maxVal = parseInt(max);

    if (changedVal >= minVal && changedVal <= maxVal) {
      setNumberValue(changedVal);
      setVal(changedVal.toString());
    } else {
      setNumberValue(minVal);
      setVal(min);
    }

    onChange();
  };

  useEffect(() => {}, [numberValue]);

  useEffect(() => {
    handleChange(parseInt(value));
  }, [value]);

  return (
    <QuantityContainer color={palette.neutral400}>
      <ButtonContainer color={palette.primary}>
        <AtomButtonIcon
          disabled={val === min}
          color="primary"
          customColor="neutral"
          typeButtonIcon={"outline"}
          type="button"
          icon="remove"
          text=""
          onClick={handleRemove}
          className="quantity-remove-button"
          shape="circle"
          width="48px"
          size="large"
        />
      </ButtonContainer>

      <InputContainer color={palette.primary}>
        <AtomInputNumber
          disabled={false}
          value={val}
          onChange={handleChange}
          min={min}
          max={max}
        />
      </InputContainer>

      <ButtonContainer color={palette.primary}>
        <AtomButtonIcon
          disabled={val === max}
          typeButtonIcon={"outline"}
          color="primary"
          customColor="neutral"
          type="button"
          icon="add"
          text=""
          onClick={handleAdd}
          className="quantity-add-button"
          shape="circle"
          width="48px"
          size="large"
        />
      </ButtonContainer>
    </QuantityContainer>
  );
};
