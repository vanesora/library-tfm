import React, { useState, Fragment, useEffect } from "react";
import { InputContainer, IconDiv } from "./styles";
import { AtomIcon } from "react/atoms/Icon";
import { IInputProps } from "interfaces";
import { AtomInputText } from "react/atoms/Input/InputText";
import { AtomTooltip } from "react/atoms/Tooltip";

export interface IInputCopyProps extends IInputProps {
  value?: string;
  copyMessage?: string;
}

export const MoleculeInputCopy = ({
  value = "",
  copyMessage = "Copied!",
  disabled = false,
}: IInputCopyProps) => {
  const [val, setVal] = useState<string>(value);
  const [showTooltip, setShowTooltip] = useState<boolean>(false);
  const [message, setMessage] = useState<string>(copyMessage);
  const [errorCopy, seterrorCopy] = useState<boolean>(false);

  const copied = async () => {
    try {
      await navigator.clipboard.writeText(val);
    } catch {
      seterrorCopy(true);
    }
    if (errorCopy) {
      setMessage("error");
    } else {
      setMessage(copyMessage);
    }
    setShowTooltip(true);
    setTimeout(() => setShowTooltip(false), 1000);
  };

  useEffect(() => {
    setVal(value);
  }, [value]);

  useEffect(() => {
    setMessage(copyMessage);
  }, [copyMessage]);

  return (
    <Fragment>
      <AtomTooltip show={showTooltip} removeArrow={true} text={message} />
      <InputContainer>
        <AtomInputText
          disabled={disabled}
          value={val}
          onChange={(e) => setVal(e)}
          withIcon={true}
        />
        <IconDiv id="copyText" onClick={() => copied()}>
          <AtomIcon icon="copy" size={20} color={"neutral600"} />
        </IconDiv>
      </InputContainer>
    </Fragment>
  );
};
