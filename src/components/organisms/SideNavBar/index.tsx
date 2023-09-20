import React, { useState } from "react";

import { CloseButton, Content, HeaderMenu, Menu, Sidebar } from "./styles";
import { IItemProps, MoleculeListSelect } from "../../molecules/ListSelect";
import { MoleculeHeader } from "../../molecules/Header";
import { AtomIcon } from "../../atoms/Icon";
import { AtomSubtitle } from "../../atoms/Typography/Subtitle";

export interface IGlobalHeaderProps {
  /** user name to show in the header */
  userName: string;
  /** action to click in Log out button */
  handleClickLogOut?: (e?: any) => void;
  /** action to click in menu button */
  buttonSelectClick?: (e?: any) => void;
  /** Pages into app */
  children?: React.ReactNode;
  /** item List menu */
  menuData: IItemProps[];
}

export const OrganismSideNavBar = ({
  children,
  userName,
  handleClickLogOut,
  menuData,
  buttonSelectClick,
}: IGlobalHeaderProps): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleButtonSelect = (item: any) => {
    buttonSelectClick && buttonSelectClick();
    console.log("item selected: ", item);
  };

  return (
    <>
      <Sidebar isMenuOpen={isMenuOpen}>
        <Menu isMenuOpen={isMenuOpen}>
          <HeaderMenu>
            <CloseButton onClick={toggleMenu}>
              <AtomIcon icon="close" size="medium" color="white" />
            </CloseButton>
            <AtomSubtitle text={userName} align="right" color="white" />
          </HeaderMenu>
          <MoleculeListSelect
            data={menuData}
            direction="column"
            initialSelected={1}
            onButtonSelect={handleButtonSelect}
          />
        </Menu>

        <Content isMenuOpen={isMenuOpen}>
          <MoleculeHeader
            userName={userName}
            onMenuToggle={toggleMenu}
            onLogout={handleClickLogOut}
          />
          {children}
        </Content>
      </Sidebar>
    </>
  );
};
