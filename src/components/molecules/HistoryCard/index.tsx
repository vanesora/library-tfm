import React from "react";
import { AtomCaption } from "react/atoms/Typography/Caption";
import { AtomCardContainer } from "react/atoms/CardContainer/index";
import { AtomIcon } from "react/atoms/Icon";
import {
  Container,
  DescriptionContainer,
  RightContainer,
  IconContainer,
  DateContainer,
  ArrowContainer,
  CenteredIconContainer,
  LeftContainer,
} from "./styles";
import { keysTheme } from "data/dataMx";
import { AtomTag } from "react/atoms/Tag";
import { CSSObject } from "styled-components";

export interface IHistoryCardProps {
  cardWidth: string;
  cardHeight: string;
  cardPadding?: string;
  iconName?: string;
  iconSize?: number;
  iconColor?: keysTheme;
  iconCaptionText?: string;
  iconCaptionColor?: keysTheme;
  iconCaptionSize?: "xlarge" | "large" | "medium" | "small" | "xsmall";
  iconCaptionWeight?:
    | "thin"
    | "extralight"
    | "light"
    | "regular"
    | "medium"
    | "semibold"
    | "bold"
    | "extrabold"
    | "black";
  iconDescriptionText?: string;
  iconDescriptionSize?: "xlarge" | "large" | "medium" | "small" | "xsmall";
  iconDescriptionWeight?:
    | "thin"
    | "extralight"
    | "light"
    | "regular"
    | "medium"
    | "semibold"
    | "bold"
    | "extrabold"
    | "black";
  iconDescriptionColor?: keysTheme;

  date?: string;
  dateDescription?: string;
  tagText?: string;
  tagColor?: keysTheme;
  isClickable?: boolean;
  arrowSize?: number;
  onClick?: () => void;
  centeredIcon?: boolean;
  backgroundColor?: keysTheme;
  /** Shadow size card */
  shadowSize?: "small" | "regular" | "large" | "noshadow";
}

export const MoleculeHistoryCard = ({
  cardWidth,
  cardHeight,
  cardPadding = "20px 16px",
  iconName = "",
  iconSize = 25,
  iconColor = "neutral600",
  iconCaptionText = "",
  iconCaptionColor = "primary",
  iconCaptionSize = "xlarge",
  iconCaptionWeight = "bold",
  iconDescriptionText = "",
  iconDescriptionSize = "medium",
  iconDescriptionWeight = "bold",
  iconDescriptionColor = "neutral500",
  date = "",
  dateDescription = "",
  tagText = "",
  tagColor = "quaternary",
  isClickable = false,
  arrowSize = 25,
  onClick,
  centeredIcon = false,
  backgroundColor = "neutral100",
  shadowSize = "regular",
}: IHistoryCardProps) => {
  return (
    <AtomCardContainer
      height={cardHeight}
      width={cardWidth}
      padding={cardPadding}
      flexDirection="row"
      bgColor={backgroundColor}
      shadowSize={shadowSize}
    >
      <Container
        onClick={() => (isClickable && onClick ? onClick() : null)}
        data-testid="history-card-container"
      >
        <LeftContainer>
          {centeredIcon && (
            <CenteredIconContainer>
              <AtomIcon icon={iconName} size={iconSize} color={iconColor} />
            </CenteredIconContainer>
          )}
          <DescriptionContainer isIconCentered={centeredIcon}>
            <IconContainer>
              {!!iconName && !centeredIcon && (
                <AtomIcon icon={iconName} size={iconSize} color={iconColor} />
              )}
              <AtomCaption
                text={iconCaptionText}
                size={iconCaptionSize}
                color={iconCaptionColor}
                weight={iconCaptionWeight}
              />
            </IconContainer>
            {!!iconDescriptionText && (
              <AtomCaption
                text={iconDescriptionText}
                size={iconDescriptionSize}
                color={iconDescriptionColor}
                weight={iconDescriptionWeight}
              />
            )}
          </DescriptionContainer>
        </LeftContainer>
        <RightContainer>
          <DateContainer hasTag={!!tagText} hasDate={!!date}>
            {!!date && (
              <AtomCaption
                text={date}
                size="medium"
                align="right"
                color={"neutral400"}
              />
            )}
            {tagText ? (
              <AtomTag
                text={tagText}
                backgroundColor={tagColor}
                textColor={"neutral100"}
              />
            ) : (
              !!dateDescription && (
                <AtomCaption
                  text={dateDescription}
                  size="medium"
                  align="right"
                  color={"neutral500"}
                />
              )
            )}
          </DateContainer>
          {!!isClickable && (
            <ArrowContainer>
              <AtomIcon
                icon="keyboard_arrow_right"
                size={arrowSize}
                color={"neutral400"}
              />
            </ArrowContainer>
          )}
        </RightContainer>
      </Container>
    </AtomCardContainer>
  );
};
