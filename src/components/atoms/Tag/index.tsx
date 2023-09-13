import React, { FunctionComponent, useContext } from "react";
import { keysTheme } from "data/dataMx";
import { AtomIcon } from "react/atoms/Icon";
import { AtomOverline } from "react/atoms/Typography/Overline";
import { TagContainer, IconContainer } from "./styles";
import { ThemeContext } from "context/context";

type TagSize = "small" | "medium" | "large";

export interface AtomTagIProps {
  backgroundColor?: keysTheme;
  text: string;
  width?: number;
  iconLeft?: string;
  iconRight?: string;
  textColor?: keysTheme;
  size?: TagSize;
  displayIconLeft?: boolean;
  displayIconRight?: boolean;
}

const tagTypes = {
  large: {
    height: 28,
  },
  medium: {
    height: 24,
  },
  small: {
    height: 8,
  },
};

const iconTypes = {
  large: {
    size: 24,
  },
  medium: {
    size: 18,
  },
  small: {
    size: 14,
  },
};

export const AtomTag: FunctionComponent<AtomTagIProps> = ({
  text,
  width,
  iconLeft,
  iconRight,
  textColor,
  backgroundColor,
  size = "small",
  displayIconLeft = false,
  displayIconRight = false,
}) => {
  const { palette } = useContext(ThemeContext);

  return (
    <TagContainer
      colorPalette={palette}
      backgroundColor={backgroundColor && palette[backgroundColor]}
      width={width}
      height={tagTypes[size] ? tagTypes[size].height : 8}
    >
      <IconContainer>
        {iconLeft && displayIconLeft && (
          <AtomIcon
            icon={iconLeft}
            size={iconTypes[size] ? iconTypes[size].size : 16}
            color={textColor}
          />
        )}
      </IconContainer>
      <AtomOverline
        size="xlarge"
        align={"left"}
        text={text}
        color={textColor}
      />
      <IconContainer>
        {iconRight && displayIconRight && (
          <AtomIcon
            icon={iconRight}
            size={iconTypes[size] ? iconTypes[size].size : 16}
            color={textColor}
          />
        )}
      </IconContainer>
    </TagContainer>
  );
};
