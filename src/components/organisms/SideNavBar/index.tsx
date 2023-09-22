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
  /** don't view Menu */
  notView: boolean;
}

export const OrganismSideNavBar = ({
  children,
  userName,
  handleClickLogOut,
  menuData,
  buttonSelectClick,
  notView
}: IGlobalHeaderProps): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleButtonSelect = (item: any) => {
    buttonSelectClick && buttonSelectClick(item);
  };

  return (
    <>
      <Sidebar isMenuOpen={isMenuOpen}>
        <Menu isMenuOpen={isMenuOpen} notView={notView}>
          <HeaderMenu>
            <CloseButton onClick={toggleMenu}>
              <AtomIcon icon="close" size="medium" color="white" />
            </CloseButton>
            <AtomSubtitle text={userName} align="right" color="white" />
          </HeaderMenu>
          <MoleculeListSelect
            data={menuData}
            direction="column"
            initialSelected={0}
            onButtonSelect={handleButtonSelect}
          />
        </Menu>

        <Content isMenuOpen={isMenuOpen}>
          <div style={{display: notView? 'none' : 'block'}}>
            <MoleculeHeader
              userName={userName}
              onMenuToggle={toggleMenu}
              onLogout={handleClickLogOut}
            />
          </div>
          {children}
        </Content>
      </Sidebar>
    </>
  );
};
