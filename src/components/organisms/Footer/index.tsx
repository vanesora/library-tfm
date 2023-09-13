/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React, { useContext } from "react";
import { AtomButtonIcon } from "react/atoms/Buttons/Icon";
import { AtomIcon } from "react/atoms/Icon";
import { AtomLink } from "react/atoms/Link";
import { AtomLogo, ILogoProps } from "react/atoms/Logo";
import { AtomBody } from "react/atoms/Typography/Body";
import {
  AppsButtonsContainer,
  FooterContainer,
  FooterMenuContainer,
  FooterText,
  LogoContainer,
  SocialMediaContainer,
  SocialMediaLink,
} from "./styles";
import { ThemeContext } from "context/context";

export interface IFooterProps extends Omit<ILogoProps, "size"> {
  /** an array with the icon text and links for the social icos */
  socialMediaIcons?: any;
  /** an array with the text and url of every menu link */
  footerLinks: any;
  /** an object for modify the apps buttons */
  appsButtons: appsBtns;
  /** footer text */
  footerText: string;
}

interface appsBtns {
  appstore: appBtn;
  playstore: appBtn;
}

interface appBtn {
  text?: string;
  appUrl: string;
  showButton: boolean;
}

export const OrganismFooter = ({
  socialMediaIcons,
  footerLinks = [{ text: "Text Link", url: "https://mycooler.com/" }],
  appsButtons = {
    appstore: { appUrl: "/", showButton: true },
    playstore: { appUrl: "/", showButton: true },
  },
  footerText,
  url,
  logoTheme = "monocromatic",
  text = "sided",
}: IFooterProps): JSX.Element => {
  const { palette } = useContext(ThemeContext);
  return (
    <FooterContainer colors={palette}>
      <LogoContainer>
        <AtomLogo size="small" logoTheme={logoTheme} text={text} url={url} />
      </LogoContainer>
      <FooterMenuContainer>
        {
          /* istanbul ignore next */
          footerLinks
            ? footerLinks.map((item: any, idx: number) => (
                <AtomLink
                  url={item.url}
                  typeIcon={"noIcon"}
                  text={item.text}
                  color="custom"
                  customColor="light"
                  typeLink="section"
                  key={idx}
                />
              ))
            : null
        }
      </FooterMenuContainer>
      <SocialMediaContainer>
        {socialMediaIcons
          ? socialMediaIcons.map((item: any, idx: number) => (
              <SocialMediaLink href={item.url} key={item.id || idx}>
                <AtomIcon icon={item.iconName} size={18} color={"neutral100"} />
              </SocialMediaLink>
            ))
          : null}
      </SocialMediaContainer>
      <AppsButtonsContainer>
        <AtomButtonIcon
          data-testid="appleBtn"
          icon={"apple"}
          disabled={false}
          color={"primary"}
          text={appsButtons.appstore.text ?? "App Store"}
          type={"button"}
          width="154px"
          iconAlign="left"
          styles={{ margin: "0 2%" }}
          onClick={() =>
            /* istanbul ignore next */
            window.open(`${appsButtons.appstore.appUrl}`, "_blank")
          }
          style={{
            display: `${!appsButtons.appstore.showButton ? "none" : "flex"}`,
          }}
        />
        <AtomButtonIcon
          data-testid="googleBtn"
          icon={"google_play"}
          disabled={false}
          color={"primary"}
          text={appsButtons.appstore.text ?? "Play Store"}
          type={"button"}
          width="154px"
          iconAlign="left"
          styles={{ margin: "0 2%" }}
          onClick={() =>
            /* istanbul ignore next */
            window.open(`${appsButtons.playstore.appUrl}`, "_blank")
          }
          style={{
            display: `${!appsButtons.playstore.showButton ? "none" : "flex"}`,
          }}
        />
      </AppsButtonsContainer>
      <FooterText>
        <AtomBody size={"small"} text={footerText} color={"neutral100"} />
      </FooterText>
    </FooterContainer>
  );
};
