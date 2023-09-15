import React, { useContext } from "react";
import { ContainerIcon, GeneralStyledButton } from "./styles";
import { IProps } from "../ButtonProps";
import { useWindowWidth } from "../../../../hooks/useWindowWidth";
import { AtomIcon } from "../../Icon";
import { AtomParagraph } from "../../Typography/Paragraph";
import { AtomSubtitle } from "../../Typography/Subtitle";

export const AtomButtonMenu = ({
  disabled,
  onClick,
  color,
  text,
  icon,
  type,
  selected = false,
  ...props
}: IProps) => {
  const widthHook = useWindowWidth();

  return (
    <GeneralStyledButton
      disabled={disabled}
      onClick={onClick}
      type={type}
      flex={widthHook > 700? 'column': 'row'}
      widthHook={widthHook?? 0}
      {...props}
    >
      <ContainerIcon selected={selected}>
        <AtomIcon
          icon={icon?? ''}
          size={'medium'}
          color={selected? '#456db3': 'white'}
        />
      </ContainerIcon>
      {widthHook > 700? <AtomParagraph text={text} size="small" align="center" color={selected? '#456db3': 'white'} /> : 
      <AtomSubtitle text={text} size="small" align="center" color={selected? '#456db3': 'white'} />}
    </GeneralStyledButton>
  );
};
