import React, { useContext } from "react";
import { GeneralStyledBtn } from "./styles";
import { AtomIcon } from "../../Icon";
import { AtomTitle } from "../../Typography/Title";
import { IPropsButtonBack } from "../ButtonProps";

export const AtomButtonBack = ({
  onClick,
  text,
  ...props
}: IPropsButtonBack) => {

  return (
    <GeneralStyledBtn
      {...props}
      onClick={onClick}
      type={"button"}
    >
      <AtomIcon
        icon="keyboard_arrow_left"
        size={'large'}
        color={props.disabled ? "#767171" : '#090088'}
      />
      {text && (
        <AtomTitle
          text={text}
          size="large"
          color={props.disabled ? "#767171" : "#090088"}
        />
      )}
    </GeneralStyledBtn>
  );
};
