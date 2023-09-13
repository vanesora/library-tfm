/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { IPalette } from "interfaces/index";
import styled from "styled-components";

interface IStylesProps {
  isClosed?: boolean;
  isAvailable?: boolean;
  logged?: boolean;
}

interface IColors {
  colors: IPalette;
}

export const HeaderContainer = styled.div`
  box-shadow: 0px 5px 16px ${({ colors }: IColors) => colors.neutral300};

  @media screen and (max-width: 640px) {
    padding: 6px 16px;
  }
`;

export const NotLoggedContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 17px 16px;

  @media screen and (max-width: 1024px) {
    padding: 22px 16px;
  }

  @media screen and (max-width: 640px) {
    padding: 0;
  }
`;

export const LoginRegisterButtons = styled.div`
  display: flex;
`;

export const LoggedContainer = styled.div`
  display: flex;
  align-items: ${({ isClosed }: IStylesProps) =>
    isClosed ? "normal" : "center"};
  flex-direction: ${({ isClosed }: IStylesProps) =>
    isClosed ? "column" : "row"};
  padding: 7px 16px;
  @media screen and (max-width: 1024px) {
    padding: ${({ isClosed, isAvailable }: IStylesProps) =>
      isClosed ? "5% 0" : isAvailable ? "11px 16px" : "22px 16px"};
  }
  @media screen and (max-width: 640px) {
    padding: ${({ isClosed }: IStylesProps) => (isClosed ? "5% 0" : "0")};
  }
`;

export const HeaderElements = styled.div`
  display: ${({ isClosed }: IStylesProps) => (isClosed ? "none" : "flex")};
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  width: 100%;

  @media screen and (max-width: 1024px) {
    margin-left: ${({ isAvailable }: IStylesProps) =>
      isAvailable ? "2%" : "0"};
  }
`;

export const UserProfile = styled.button`
  background-color: ${({ colors }: IColors) => colors.neutral300};
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 5%;
  border: none;
  cursor: pointer;
`;

export const UserProfileContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: ${({ isAvailable }: IStylesProps) => (isAvailable ? "30%" : "88%")};

  @media screen and (max-width: 640px) {
    justify-content: ${({ isAvailable }: IStylesProps) =>
      isAvailable ? "flex-end" : "space-between"};
  }
`;

export const DesktopMenu = styled.div`
  display: flex;
  justify-content: end;
  width: 40%;
  margin-right: 2%;

  h6 {
    margin-top: 0;
    margin-bottom: 0;
  }
`;

export const UserNameAndIcon = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media screen and (max-width: 640px) {
    display: ${({ isAvailable }: IStylesProps) =>
      isAvailable ? "none" : "88%"};
  }
`;
