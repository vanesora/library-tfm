import { IPalette } from "interfaces/index";
import styled from "styled-components";
interface IColors {
  colors: IPalette;
} 

export const FooterContainer = styled.div`
  .logo {
    grid-area: logo;
  }
  .menuItems {
    grid-area: menuItems;
  }
  .socialIcons {
    grid-area: socialIcons;
  }
  .appsButtons {
    grid-area: appsButtons;
  }
  .textArea {
    grid-area: textArea;
  }

  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-areas:
    'logo menuItems socialIcons appButtons'
    'textArea textArea textArea textArea';
  gap: 4%;
  background-color: ${({ colors }: IColors) => colors.neutral700};;
  padding: 4%;

  @media (max-width: 1028px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      'logo'
      'menuItems'
      'appButtons'
      'socialIcons'
      'textArea';
    padding: 11%;
    padding-bottom: 10%;
  }

  @media (max-width: 624px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      'logo'
      'menuItems'
      'appButtons'
      'socialIcons'
      'textArea';
    padding: 11%;
    gap: inherit;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 1028px) {
    grid-column: 1/2;
    justify-content: center;
  }
`;

export const FooterMenuContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: white;
  grid-column: 2/8;

  a {
    margin: 0 2%;
  }

  @media (max-width: 1028px) {
    grid-column: 1/2;
    justify-content: center;
    padding: 2% 0;
  }

  @media (max-width: 624px) {
    flex-direction: column;
    a {
      margin: 2% auto;
    }
  }
`;

export const SocialMediaContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  grid-column: 8/9;

  @media (max-width: 1028px) {
    grid-column: 1/2;
    justify-content: center;
    padding: 2% 0;
  }
`;

export const SocialMediaLink = styled.a`
  margin: 0 7%;

  @media (max-width: 1028px) {
    margin: 0 2%;
  }
`;

export const AppsButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  grid-column: 9/13;

  @media (max-width: 1028px) {
    grid-column: 1/2;
    justify-content: center;
    grid-row: 3;
    padding: 2% 0;
  }

  @media (max-width: 624px) {
    flex-direction: column;

    button {
      margin: 3% auto;
      width: 100%;
    }
  }
`;

export const FooterText = styled.div`
  grid-column: 1/13;
  text-align: center;
  padding-top: 3%;
  padding-bottom: 2%;

  @media (max-width: 1028px) {
    grid-column: 1/2;
    justify-content: center;
  }
`;

export const FooterLink = styled.span``;
