import React, { useState, useEffect, useContext } from "react";
import { keysTheme } from "data/dataMx";
import { TabContainer, TabMenuContainer, TabMenuParent } from "./styles";
import { AtomIcon } from "react/atoms/Icon";
import { ISize } from "react/atoms/Typography/TypographyProps";
import { AtomHeadline } from "react/atoms/Typography/Headline";
import { AtomButtonIcon } from "react/atoms/Buttons/Icon";
import { ThemeContext } from "context/context";

export interface ITab {
  id: string;
  text: string;
  iconName?: string;
  url?: string;
}

export interface ITabMenuProps {
  /** List of tabs to be shown text and icon includes ID, Tab Text and Icon name of each tab */
  tabs: Array<ITab>;
  /** Width of the tabs */
  tabsWidth?: string;
  /** Height of the tabs */
  tabHeight?: string;
  /** the Id of the tab that shoud be selected on component load */
  starterSelectedTab?: string;
  /** The color that is shown when a tab is selected */
  selectedColor?: keysTheme;
  /** If true ttab text and icon would be colored when selected */
  shouldColorLabel?: boolean;
  /** The size of the Icon */
  iconsSize?: number;
  /** The size of the tab's text */
  /** Callback when a tab is selected */
  onTabSelected: (selectedTab: string) => void;
  labelsSize?: ISize;
  /** If true Filter button will be shown */
  withFilter?: boolean;
  /** If true change colors and border */
  isSubMenu?: boolean;
  /** space between taps */
  space?: string;
  /** Callback used to whatever is needed when clicking the filter button */
  onFilterClicked?: () => void;
}

export const MoleculeTabMenu = ({
  tabs,
  selectedColor = "primary",
  shouldColorLabel = false,
  tabsWidth = "120px",
  tabHeight = "68px",
  iconsSize = 20,
  labelsSize = "large",
  starterSelectedTab = "",
  onTabSelected,
  withFilter = false,
  onFilterClicked,
  isSubMenu = false,
  space = "0",
}: ITabMenuProps) => {
  const [selectedTab, setSelectedTab] = useState<string>(starterSelectedTab);

  const { palette } = useContext(ThemeContext);

  const colorTab = (tab: ITab, type: "text" | "icon"): keysTheme => {
    if (isSubMenu) {
      return selectedTab === tab.id && type === "text"
        ? "neutral700"
        : "neutral600";
    } else {
      return selectedTab === tab.id && shouldColorLabel
        ? selectedColor
        : "neutral700";
    }
  };

  useEffect(() => {
    setSelectedTab(starterSelectedTab);
  }, [starterSelectedTab]);

  return (
    <TabMenuParent>
      <TabMenuContainer>
        {tabs.map((tab: ITab) => (
          <TabContainer
            colorPalette={palette}
            borderColor={palette[selectedColor]}
            isSelected={selectedTab === tab.id}
            key={`${tab.id}-${tab.text}`}
            tabWidth={tabsWidth}
            tabHeight={tabHeight}
            isSubMenu={isSubMenu}
            space={space}
            onClick={() => {
              setSelectedTab(tab.id);
              onTabSelected(tab.id);
            }}
          >
            {!!tab.iconName && (
              <AtomIcon
                icon={tab.iconName}
                size={iconsSize || 15}
                color={colorTab(tab, "icon")}
              />
            )}
            <AtomHeadline
              text={tab.text}
              size={labelsSize || "small"}
              weight="light"
              color={colorTab(tab, "text")}
              styles={{
                marginLeft: `${tab.iconName ? "10px" : "0px"}`,
              }}
            />
          </TabContainer>
        ))}
      </TabMenuContainer>
      {withFilter ? (
        <AtomButtonIcon
          data-testId={"filter-btn"}
          disabled={false}
          onClick={onFilterClicked}
          color="custom"
          type="button"
          icon="tune"
          iconAlign="left"
          customColor="neutral"
          shape="circle"
          text={"Filter"}
          width={"75px"}
        />
      ) : null}
    </TabMenuParent>
  );
};
