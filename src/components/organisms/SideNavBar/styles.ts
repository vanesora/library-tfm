/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import styled from "styled-components";

export const Sidebar = styled.div<{ isMenuOpen: boolean }>`
  width: 100%;
  max-width: 100%;
  height: 100%;
  max-height: 100%;
  background-color: #333;
  color: #fff;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  display: flex;

`;

export const Content = styled.div<{ isMenuOpen: boolean }>`
  width: 100%;
  max-width: 100%;
  transition: margin-left 0.3s ease-in-out;

  @media (max-width: 700px) {
    margin-left: 0;
  }
`;

export const Menu = styled.div<{ isMenuOpen: boolean, notView: boolean }>`
  display: ${({ notView }) => (notView ? "none" :"block")};
  background-color: #262626;
  z-index: 3;
  
  @media (max-width: 700px) {
    width: 260px;
    display: ${({ isMenuOpen, notView }) => (isMenuOpen ? ( notView? "none" :"block") : "none")};
    position: fixed;
  }
`;

export const HeaderMenu = styled.div`
  display: flex;
  @media (min-width: 700px) {
    display: none;
  }
`;

export const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  color: #fff;
  cursor: pointer;
  font-size: 18px;
`;
