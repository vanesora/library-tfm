import React, { useState } from "react";
import { HamburguerContainer, OverlayMenuContainer } from "./styles";
import { AtomLink } from "react/atoms/Link";
import { CSSObject } from "styled-components";
import { AtomLogo } from "react/atoms/Logo";
export interface IHamburguerMenuLinkProps {
  /** id of the menu element */
  id: string;
  /** Name icon left: a icon wich be placed on the menu element */
  nameIconLeft: string;
  /** Text link */
  text: string;
  /** URL to redirect */
  url: string;
  /** Styles in format CSSObject */
  styles?: CSSObject;
}
export interface IHamburguerMenuProps {
  /* Elements that populate the menu */
  menuElements: IHamburguerMenuLinkProps[];
  /* informs if Hamburguer is closed and provides a callback to handle this event */
  isClosed?: Function;
  /* Function to execute on click on the hamburguer menu */
  onClick?: () => void;
  /* Styles that will apply to the component */
  styles?: CSSObject;
  /* Defines if hamburguer will be displayed or not */
  display?: "inline-block" | "none";
}

export const OrganismHamburguerMenu = ({
  menuElements,
  isClosed = () => false,
  styles = {},
  display = "inline-block",
}: IHamburguerMenuProps) => {
  const [change, setChange] = useState(false);
  const toggleHamburguer = () => {
    setChange(!change);
    isClosed(change);
  };

  return (
    <>
      <HamburguerContainer
        style={{ width: change ? "160px" : "24.75px" }}
        display={display}
        onClick={toggleHamburguer}
        data-testid="id"
        key={"hamburguer-container"}
      >
        <AtomLogo
          logoTheme="light"
          size="small"
          text="sided"
          className={`${change ? "show_logo" : "hide_logo"}`}
        />
        <div className={`${change ? "bar1 change" : "bar1"}`}></div>
        <div className={`${change ? "bar2 change" : "bar2"}`}></div>
        <div className={`${change ? "bar3 change" : "bar3"}`}></div>
      </HamburguerContainer>
      <OverlayMenuContainer
        className={`${
          change ? "mobile-button-container change" : "mobile-button-container"
        }`}
        key="menu-overlay"
      >
        {menuElements.map((element: IHamburguerMenuLinkProps) => (
          <AtomLink
            key={element.id}
            align="left"
            color="custom"
            customColor="neutral"
            nameIconLeft={element.nameIconLeft}
            nameIconRight="keyboard_arrow_right"
            styles={element.styles}
            text={element.text}
            typeIcon="Left"
            typeLink="default"
            url={element.url}
            target={"_self"}
          />
        ))}
      </OverlayMenuContainer>
    </>
  );
};
