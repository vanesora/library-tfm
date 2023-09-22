import React, { useContext, useState } from "react";
import { ContainerIcon, GeneralStyledButton } from "./styles";
import { IPropsButtonMenu } from "../ButtonProps";
import { useWindowWidth } from "../../../../hooks/useWindowWidth";
import { AtomIcon } from "../../Icon";
import { AtomParagraph } from "../../Typography/Paragraph";
import { AtomSubtitle } from "../../Typography/Subtitle";

export const AtomButtonMenu = ({
  onClick,
  text,
  icon,
  type,
  selected = false,
  ...props
}: IPropsButtonMenu) => {
  const widthHook = useWindowWidth();
  const [isHover, setIsHover] = useState(false);


  return (
    <GeneralStyledButton
      onClick={onClick}
      type={type}
      flex={widthHook > 700? 'column': 'row'}
      widthHook={widthHook?? 0}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      {...props}
    >
      <ContainerIcon selected={selected}>
        <AtomIcon
          icon={icon?? ''}
          size={'large'}
          color={isHover? '#FF7300' : selected? '#456db3': 'white'}
        />
      </ContainerIcon>
      {widthHook > 700? (isHover && <AtomParagraph text={text} size="small" align="center" color={isHover? '#FF7300' : selected? '#456db3': 'white'} />) : 
      <AtomSubtitle text={text} size="small" align="center" color={isHover? '#FF7300' : selected? '#456db3': 'white'} />}
    </GeneralStyledButton>
  );
};
