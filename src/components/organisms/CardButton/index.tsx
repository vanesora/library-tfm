import React, { useEffect, useState } from "react";
import {
  CardButton,
  ContainerButton,
  ContainerImage,
  ContainerText,
  TextImage,
} from "./styles";
import { AtomButtonDefault } from "react/atoms/Buttons/Default";
import { AtomBody } from "react/atoms/Typography/Body";
import { colors, keysTheme, theme } from "data/dataMx";
import { AtomHeadline } from "react/atoms/Typography/Headline";
import { AtomCaption } from "react/atoms/Typography/Caption";
import { AtomImage } from "react/atoms/Image";
import {
  ButtoniconTypeDesign,
  ButtonSize,
  ButtonTypeDesign,
  IconAlign,
} from "react/atoms/Buttons/ButtonProps";
import { AtomButtonOutline } from "react/atoms/Buttons/Outline";
import { AtomButtonGhost } from "react/atoms/Buttons/Ghost";
import { AtomButtonIcon } from "react/atoms/Buttons/Icon";
import { AtomTruncate } from "react/atoms/Typography/Truncate";

export type OrientationCard = "row" | "column";

interface IItemProps {
  /** Disabled button */
  disabled: boolean;
  /** Click action */
  onClick?: (e?: any) => void;
  /** text in button */
  text: string;
  /** Type Button (ghost | default | icon | outline) */
  type: ButtonTypeDesign;
  /** icon Name */
  icon?: string;
  /** position of the icon relative to the text */
  iconAlign?: IconAlign;
  /** If Button is icon */
  typeButtonIcon?: ButtoniconTypeDesign;
  /** Size Button */
  size: ButtonSize;
  /** Color text */
  colorText?: colors;
}
export interface ISizeProps {
  width: string;
  height: string;
  heightButton: ButtonSize;
}

export interface ICardButtonProps {
  /** Click action */
  handleClick: () => void;
  /** Principal text */
  title: string;
  /** Description text */
  description: string;
  /** text in button */
  textButton: string;
  /** Image location */
  src: string;
  /** Can be: column or row */
  orientation?: OrientationCard;
  /** subtitle text */
  category?: string;
  /** Card height */
  heightCard?: string;
  /** Click width */
  widthCard?: string;
  /** Disabled button */
  disabled?: boolean;
  /** Text tag, if don't have it, don't show it */
  tagText?: string;
  /** Type Button (ghost | default | icon | outline) */
  typeButton?: ButtonTypeDesign;
  /** If Button is icon */
  iconButton?: string;
  /** If Button is icon */
  typeButtonIcon?: ButtoniconTypeDesign;
  /** Color text */
  colorText?: colors;
  /** Background color tag */
  colorTag?: keysTheme;
}

const Button = ({
  disabled,
  onClick,
  text,
  icon,
  iconAlign,
  typeButtonIcon,
  type,
  size,
  colorText = "#20BBEC",
}: IItemProps) => {
  switch (type) {
    case "outline":
      return (
        <AtomButtonOutline
          disabled={disabled}
          onClick={onClick}
          color={"primary"}
          text={text}
          type={"button"}
          width={"100%"}
          size={size}
        />
      );
    case "default":
      return (
        <AtomButtonDefault
          disabled={disabled}
          onClick={onClick}
          color={"primary"}
          text={text}
          type={"button"}
          width={"100%"}
          size={size}
        />
      );
    case "ghost":
      return (
        <AtomButtonGhost
          disabled={disabled}
          onClick={onClick}
          color={"primary"}
          text={text}
          type={"button"}
          width={"100%"}
          size={size}
        />
      );
    case "icon":
      return (
        <AtomButtonIcon
          disabled={disabled}
          onClick={onClick}
          color={"primary"}
          text={text}
          type={"button"}
          icon={icon ?? ""}
          iconAlign={iconAlign}
          width={"100%"}
          typeButtonIcon={typeButtonIcon}
          size={size}
          styles={{ color: colorText }}
        />
      );
  }
};

export const OrganismsCardButton = ({
  handleClick,
  disabled = false,
  heightCard,
  widthCard,
  title,
  description,
  category,
  textButton,
  tagText,
  src,
  orientation = "column",
  typeButton = "default",
  iconButton = "arrow_forward_ios",
  typeButtonIcon,
  colorText = "#20BBEC",
  colorTag = "quaternary",
}: ICardButtonProps) => {
  const [size, setSize] = useState<ISizeProps>({
    width: widthCard || (orientation == "column" ? "239px" : "320px"),
    height: heightCard || (orientation == "column" ? "342px" : "168px"),
    heightButton: "small",
  });

  const assignHeightButton = (widthButton: number) => {
    if (orientation == "column") {
      return widthButton < 180
        ? "small"
        : widthButton < 280
        ? "medium"
        : "large";
    } else {
      return widthButton < 340
        ? "small"
        : widthButton < 440
        ? "medium"
        : "large";
    }
  };

  useEffect(() => {
    const width = widthCard || (orientation == "column" ? "239px" : "320px");
    const widthButton = parseInt(width);
    const heightButton: ButtonSize = assignHeightButton(widthButton);
    setSize({
      width,
      height: heightCard || (orientation == "column" ? "342px" : "168px"),
      heightButton,
    });
  }, [widthCard, heightCard, orientation]);

  return (
    <>
      <CardButton
        theme={theme}
        width={size.width}
        height={size.height}
        orientation={orientation}
      >
        {tagText && (
          <TextImage theme={theme} color={colorTag}>
            <AtomCaption
              size="small"
              text={tagText}
              align="center"
              color={"neutral100"}
              weight={"regular"}
            ></AtomCaption>
          </TextImage>
        )}
        <ContainerImage orientation={orientation} theme={theme}>
          <AtomImage
            src={src}
            alt={title}
            imgHeight={"100%"}
            imgWidth={"100%"}
            borderRadius={
              orientation == "column" ? "8px 8px 0px 0px" : "8px 0px 0px 8px"
            }
            resizeMode="cover"
          ></AtomImage>
        </ContainerImage>
        <ContainerText orientation={orientation} theme={theme}>
          {category && (
            <AtomBody
              size="small"
              text={category}
              align={orientation == "column" ? "center" : "left"}
              color={"neutral500"}
              weight={"light"}
            />
          )}
          <AtomTruncate
            numberOfLineTruncate={2}
            size="medium"
            text={title}
            align={orientation == "column" ? "center" : "left"}
            color={"neutral700"}
            weight={"bold"}
          />
          {orientation == "column" && (
            <AtomBody
              size="medium"
              text={description}
              align={"center"}
              color={"neutral600"}
              weight={"light"}
            />
          )}
          <ContainerButton orientation={orientation}>
            <Button
              text={textButton}
              type={typeButton}
              onClick={handleClick}
              disabled={disabled}
              size={size.heightButton}
              icon={iconButton}
              typeButtonIcon={typeButtonIcon}
              colorText={colorText}
            />
          </ContainerButton>
        </ContainerText>
      </CardButton>
    </>
  );
};
