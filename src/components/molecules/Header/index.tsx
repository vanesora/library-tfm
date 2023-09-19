import React, { useContext, useEffect, useState } from "react";

import { AtomLogo } from "../../atoms/Logo";
import {
  HeaderContainer,
  HeaderControls,
  Logo,
  LogoutButton,
  MenuIcon,
  UserName,
} from "./styles";
import { AtomIcon } from "../../atoms/Icon";
import { AtomSubtitle } from "../../atoms/Typography/Subtitle";

export interface IHeaderProps {
  /** user name to show in the header */
  userName: string;
  /** action to click in Log out button */
  onLogout?: (e?: any) => void;
  /** is menu is open */
  onMenuToggle?: (e?: any) => void;
}

export const MoleculeHeader = ({
  userName,
  onLogout,
  onMenuToggle,
}: IHeaderProps): JSX.Element => {
  return (
    <HeaderContainer>
      <MenuIcon onClick={onMenuToggle}>
        <AtomIcon icon="menu" size="medium" color="white" />
      </MenuIcon>
      <HeaderControls>
        <Logo>
          <AtomLogo size="small" type="line" />
        </Logo>
        <UserName>
          <AtomSubtitle text={userName} align="right" color="white" />
        </UserName>
        <LogoutButton onClick={onLogout}>
          <AtomIcon icon="logout" size="medium" color="white" />
        </LogoutButton>
      </HeaderControls>
    </HeaderContainer>
  );
};
