import React, { useContext } from "react";
import {
  Banner,
  BannerImage,
  BannerTitle,
  BannerDescription,
  BannerButton,
} from "./styles";
import { AtomSubtitle } from "react/atoms/Typography/Subtitle";
import { AtomIcon } from "react/atoms/Icon";
import { AtomBody } from "react/atoms/Typography/Body";
import { AtomImage } from "react/atoms/Image";
import { AtomButtonDefault } from "react/atoms/Buttons/Default";
import { IBannerBackgroundProps } from "./BannerBackgroundProps";
import { ThemeContext } from "context/context";

const flexAlign = {
  center: "center",
  left: "flex-start",
  right: "flex-end",
};

export const MoleculeBannerBackground = ({
  title,
  textColor,
  textAlign = "center",
  height = "auto",
  iconName = "",
  background = ["transparent"],
  backgroundImage = "",
  description = "",
  buttonBackground = "primary",
  buttonBackgroundCustom = "tertiary",
  buttonText = "",
  onClick,
  style = {},
}: IBannerBackgroundProps) => {
  const { palette } = useContext(ThemeContext);

  let colorsBackground = "";
  background.forEach((color) => {
    colorsBackground +=
      palette[color] === palette[background[background.length - 1]]
        ? palette[color]
        : `${palette[color]}, `;
  });
  const backgroundType =
    background.length === 1
      ? `background: ${colorsBackground}`
      : `background-image: linear-gradient(${colorsBackground})`;

  return (
    <Banner background={backgroundType} height={height} style={style}>
      {backgroundImage && (
        <BannerImage>
          <AtomImage src={backgroundImage} alt="Banner Image" />
        </BannerImage>
      )}
      <BannerTitle flexAlign={flexAlign[textAlign]}>
        {iconName && <AtomIcon icon={iconName} size={24} color={textColor} />}
        <AtomSubtitle
          align={textAlign}
          text={title}
          color={textColor}
          size="medium"
          weight="regular"
        />
      </BannerTitle>
      {description && (
        <BannerDescription>
          <AtomBody
            align={textAlign}
            text={description}
            color={textColor}
            size="medium"
            weight="regular"
          />
        </BannerDescription>
      )}
      {buttonText && (
        <BannerButton flexAlign={flexAlign[textAlign]}>
          <AtomButtonDefault
            text={buttonText}
            color={buttonBackground}
            customColor={buttonBackgroundCustom}
            disabled={false}
            type="button"
            onClick={onClick}
          />
        </BannerButton>
      )}
    </Banner>
  );
};
