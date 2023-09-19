/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #262626;
  color: #fff;
  height: 50px;
  position: relative;
`;

export const HeaderControls = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 15px;
  align-items: center;

  @media (max-width: 700px) {
    margin: 0;
    margin-right: 15px;
  }
`;

export const UserName = styled.span`
  margin-right: 10px;
  @media (max-width: 700px) {
    display: none;
  }
`;

export const LogoutButton = styled.div`
`;

export const Logo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex: 1;
  @media (max-width: 700px) {
    justify-content: center;
  }
`;

export const MenuIcon = styled.div`
  padding-left: 15px;
  @media (min-width: 700px) {
    display: none;
  }
`;
