import React, { useContext } from "react";
import { GeneralStyledBtn } from "./styles";
import { AtomIcon } from "../../Icon";
import { AtomTitle } from "../../Typography/Title";

export interface IPropsBackButton
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Enable or disable the button */
  disabled: boolean;
  /** Click action */
  onClick?: (e?: any) => void;
  /** Text of button */
  text?: string;
}

export const AtomButtonBack = ({
  disabled,
  onClick,
  text,
  ...props
}: IPropsBackButton) => {

  return (
    <GeneralStyledBtn
      {...props}
      disabled={disabled}
      onClick={onClick}
      type={"button"}
    >
      <AtomIcon
        icon="keyboard_arrow_left"
        size={'large'}
        color={disabled ? "#767171" : '#090088'}
      />
      {text && (
        <AtomTitle
          text={text}
          size="large"
          color={disabled ? "#767171" : "#090088"}
        />
      )}
    </GeneralStyledBtn>
  );
};
