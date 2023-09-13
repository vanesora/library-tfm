import React from "react";
import { keysTheme, theme } from "data/dataMx";
import { AtomIcon } from "react/atoms/Icon";
import { AtomImage } from "react/atoms/Image";
import { AtomCaption } from "react/atoms/Typography/Caption";
import { AtomHeadline } from "react/atoms/Typography/Headline";
import ImageGift from "assets/images/gift.png";
import {
  BackgroundImage,
  Container,
  Content,
  Item,
  ListWrapper,
  WrapperReward,
  WrapperText,
} from "./styles";

export interface IChallengeProgressProps {
  /** Card background color */
  backgroundColor?: keysTheme;
  /** Card background image */
  backgroundImage?: string;
  /** Card background shadow */
  backgroundShadow?: string;
  /** Color of icons and their children lines */
  colorIcon?: keysTheme;
  /** Challenges status data list
   * (must be equal or less than four items) */
  data: IItemProps[];
  /** Size icon */
  sizeIcon?: number;
  /** Size image reward */
  sizeImageReward?: string;
  /** Text color */
  textColor?: keysTheme;
  /** Text reward */
  textReward: string;
  /** Text height */
  textHeight?: string;
  /** Text position left */
  textPositionLeft?: string;
  /** Text position top */
  textPositionTop?: string;
  /** Text width */
  textWidth?: string;
  /** Principal text */
  title?: string;
}

interface IItemProps {
  /** Status of each challenge */
  challengeStatus: boolean;
  /** Color of icons and their children lines */
  colorIcon?: keysTheme;
  /** Size icon */
  sizeIcon?: number;
}

const ChallengeIcon = ({
  challengeStatus,
  colorIcon,
  sizeIcon = 91,
}: IItemProps) => {
  return (
    <Item colorLine={colorIcon && theme[colorIcon]}>
      {challengeStatus ? (
        <AtomIcon icon="earn_quizes" size={sizeIcon} />
      ) : (
        <AtomIcon icon="lock_icon_circle" size={sizeIcon} color={colorIcon} />
      )}
    </Item>
  );
};

export const OrganismChallengeProgress = ({
  backgroundColor = "primary",
  backgroundImage,
  backgroundShadow = "rgba(0, 0, 0, 0.5)",
  colorIcon = "neutral100",
  data,
  sizeIcon,
  sizeImageReward = "160px",
  textColor = "neutral100",
  textReward,
  textHeight = "70px",
  textPositionLeft = "27%",
  textPositionTop = "27%",
  textWidth = "80px",
  title = "",
}: IChallengeProgressProps) => {
  return (
    <Container
      backgroundColor={
        backgroundImage ? theme.transparent : theme[backgroundColor]
      }
    >
      {backgroundImage && (
        <BackgroundImage>
          <AtomImage
            imgHeight="100%"
            imgWidth="100%"
            resizeMode="cover"
            src={backgroundImage}
            alt=""
          />
        </BackgroundImage>
      )}
      <Content
        background={backgroundImage ? backgroundShadow : theme.transparent}
      >
        <AtomHeadline
          color={textColor}
          size="large"
          text={title}
          weight="semibold"
        />
        <ListWrapper>
          {data.length <= 4 &&
            data.map((item: IItemProps, index: number) => {
              return (
                <ChallengeIcon
                  key={index}
                  challengeStatus={item.challengeStatus}
                  colorIcon={colorIcon}
                  sizeIcon={sizeIcon}
                />
              );
            })}
          {sizeImageReward && (
            <WrapperReward>
              <AtomImage
                alt=""
                imgHeight={sizeImageReward}
                imgWidth={sizeImageReward}
                src={ImageGift}
              />
              <WrapperText
                textPositionLeft={textPositionLeft}
                textPositionTop={textPositionTop}
              >
                <AtomCaption
                  align="center"
                  color={textColor}
                  size="medium"
                  text={textReward}
                  styles={{
                    maxWidth: textWidth,
                    maxHeight: textHeight,
                    overflow: "hidden",
                    wordBreak: "break-word",
                  }}
                />
              </WrapperText>
            </WrapperReward>
          )}
        </ListWrapper>
      </Content>
    </Container>
  );
};
