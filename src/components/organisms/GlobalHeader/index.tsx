import React, { useContext, useEffect, useState } from "react";
import {
  OrganismHamburguerMenu,
  IHamburguerMenuProps,
} from "../HamburguerMenu";
import { OrganismsTierLevel, ITierLevelProps } from "../TierLevel";
import { AtomBody } from "react/atoms/Typography/Body";
import { AtomLogo, ILogoProps } from "react/atoms/Logo";
import { AtomIcon } from "react/atoms/Icon";
import { AtomButtonGhost } from "react/atoms/Buttons/Ghost";
import { AtomButtonDefault } from "react/atoms/Buttons/Default";
import {
  HeaderContainer,
  NotLoggedContainer,
  LoginRegisterButtons,
  LoggedContainer,
  UserProfile,
  HeaderElements,
  UserProfileContainer,
  DesktopMenu,
  UserNameAndIcon,
} from "./styles";
import { useWindowWidth } from "../../../../hooks/useWindowWidth";
import { MoleculeTabMenu } from "react/molecules/TabMenu";
import { AtomButtonOutline } from "react/atoms/Buttons/Outline";
import { AtomTruncate } from "react/atoms/Typography/Truncate";
import { ThemeContext } from "context/context";

export interface IGlobalHeaderProps
  extends IHamburguerMenuProps,
    ITierLevelProps,
    Omit<ILogoProps, "size"> {
  /** to verify f the menu is available or not */
  isAvailable: boolean;
  /** to verify if user is logged o no */
  logged: boolean;
  /** user name to show in the header */
  userName: string;
  /** Greetings before the user name */
  greetings: string;
  /** start selected tab for unavailable menu */
  startSelectedTab: string;
  /** action to click in SingUp */
  handleClickSingUp?: (e?: any) => void;
  /** action to click in Login */
  handleClickLogin?: (e?: any) => void;
  /** action to click in User */
  handleClickUser?: (e?: any) => void;
  /** action to click in Log out button */
  handleClickLogOut?: (e?: any) => void;
  /** handle click in every tab selected */
  handleTabOnClick: (selectedTab: string) => void;
  /** handle click on tier Level */
  handleClickTierLevel: (e?: any) => void;
  /** size to window */
  widthHook?: number;
  /** make visible tier level */
  showTierLevel?: boolean;
}

export const OrganismGlobalHeader = ({
  isAvailable = false,
  logged = false,
  menuElements = [],
  actualPoints = 1000,
  totalTierPoints=1000,
  actualTier = 'Silver Tier',
  nextPoints = 1000,
  nextTier = "pts to Silver",
  iconName = "tier_bronze",
  userName = "Thomas",
  greetings = "Cheers",
  logoTheme = "light",
  text = "sided",
  url = "/",
  startSelectedTab,
  widthHook,
  handleClickTierLevel,
  handleClickSingUp,
  handleClickLogin,
  handleClickUser,
  handleClickLogOut,
  handleTabOnClick = () => null,
  showTierLevel = true,
}: IGlobalHeaderProps): JSX.Element => {
  const widthInternalHook = useWindowWidth();
  const width = widthHook ?? widthInternalHook;
  const { palette } = useContext(ThemeContext);
  const [isClosed, setisClosed] = useState<boolean>(false);
  const [tierLevelType, settierLevelType] = useState<"mobile" | "desktop">(
    "mobile"
  );
  useEffect(() => {
    /* istanbul ignore next */
    if (width <= 640) {
      settierLevelType("mobile");
    } else if (width > 640) {
      settierLevelType("desktop");
    }
  }, [width]);

  const setOpenMenu = (e: boolean): void => {
    /* istanbul ignore next */
    setisClosed(!e);
  };

  return (
    <HeaderContainer colors={palette}>
      {logged ? (
        <LoggedContainer
          isClosed={isClosed}
          isAvailable={isAvailable}
          data-testid="loggedContainer"
        >
          {isAvailable && (
            <OrganismHamburguerMenu
              display={width > 1024 ? "none" : "inline-block"}
              menuElements={menuElements}
              isClosed={setOpenMenu}
            />
          )}
          <HeaderElements
            data-testid="headerElements"
            isClosed={isClosed}
            isAvailable={isAvailable}
          >
            <AtomLogo
              size="small"
              logoTheme={logoTheme}
              text={width <= 640 && !isAvailable ? "none" : text}
              url={url}
            />
            {width > 1024 && (
              <DesktopMenu>
                <MoleculeTabMenu
                  starterSelectedTab={startSelectedTab}
                  labelsSize="small"
                  selectedColor="primary"
                  shouldColorLabel
                  tabs={menuElements}
                  onTabSelected={function (selectedTab: string): void {
                    handleTabOnClick(selectedTab);
                  }}
                />
              </DesktopMenu>
            )}
            {showTierLevel && isAvailable && (
              <OrganismsTierLevel
                iconName={iconName}
                colorProgress="quaternary500"
                actualPoints={actualPoints}
                actualTier={actualTier}
                nextPoints={nextPoints}
                nextTier={nextTier}
                type={tierLevelType}
                handleClick={handleClickTierLevel}
                styles={{
                  marginLeft: width <= 640 ? "8%" : "0",
                  width: width <= 640 ? "auto" : "250px",
                }}
                totalTierPoints={totalTierPoints}
              />
            )}
            <UserProfileContainer
              isAvailable={isAvailable}
              data-testid="userProfile"
            >
              <UserNameAndIcon isAvailable={isAvailable}>
                <AtomTruncate
                  numberOfLineTruncate={1}
                  size="medium"
                  text={`${greetings}, ${userName}!`}
                  styles={{ marginRight: "2%", width: "100%" }}
                  weight="regular"
                />
                <AtomIcon icon={"earn_beer"} size={24} />
              </UserNameAndIcon>

              {isAvailable ? (
                <UserProfile onClick={handleClickUser} colors={palette}>
                  <AtomIcon icon={"user"} size={16} />
                </UserProfile>
              ) : (
                <AtomButtonOutline
                  disabled={false}
                  color={"primary"}
                  text={"Log out"}
                  width={width < 640 ? "85px" : "102px"}
                  size="medium"
                  style={{
                    padding: "1%",
                    height: width < 1024 ? "32px" : "48px",
                    marginLeft: "5%",
                  }}
                  type={"button"}
                  onClick={handleClickLogOut}
                />
              )}
            </UserProfileContainer>
          </HeaderElements>
        </LoggedContainer>
      ) : (
        <NotLoggedContainer data-testid="notLoggedContainer">
          <AtomLogo size={"small"} logoTheme={"light"} text="sided" url={url} />
          <LoginRegisterButtons>
            <AtomButtonDefault
              disabled={false}
              color={"primary"}
              text={"Sign Up"}
              width={width < 640 ? "85px" : "102px"}
              size="medium"
              style={{ padding: "2%", height: width < 1024 ? "32px" : "48px" }}
              type={"button"}
              onClick={handleClickSingUp}
            />
            <AtomButtonGhost
              disabled={false}
              color={"primary"}
              text={"Login"}
              width={width < 640 ? "85px" : "102px"}
              size="medium"
              style={{ padding: "2%", height: width < 1024 ? "32px" : "48px" }}
              type={"button"}
              onClick={handleClickLogin}
            />
          </LoginRegisterButtons>
        </NotLoggedContainer>
      )}
    </HeaderContainer>
  );
};
