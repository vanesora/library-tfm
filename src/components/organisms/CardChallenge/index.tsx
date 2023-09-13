import React, { useState } from "react";
import { theme, keysTheme } from "data/dataMx";
import { AtomButtonDefault } from "react/atoms/Buttons/Default";
import { AtomBody } from "react/atoms/Typography/Body";
import { AtomIcon } from "react/atoms/Icon";
import { AtomImage } from "react/atoms/Image";
import { AtomProgressBar } from "react/atoms/ProgressBar";
import { AtomHeadline } from "react/atoms/Typography/Headline";
import {
  CardChallenge,
  CardChallengeInfo,
  CardChallengeImage,
  CardChallengeDescription,
  CardChallengeTitle,
  CardChallengeButton,
  CompletedButton,
  IconContainer,
  IconContainerProgress,
  ProgressContainer,
  ProgressButton,
  ProgressTitleSection,
  ProgressTitle,
  ProgresAceptedSection,
  ProgressSection,
  ProgressSectionContainer,
  ActionButtonConteiner,
} from "./styles";

export interface ICardChallenge {
  /** Name of card challenge */
  name: string;
  /** Description of card challenge */
  description: string;
  /** URL image */
  image: string;
  /** Button Action text title when completed prop is false */
  buttonText: string;
  /** Progress button text title when completed prop is false */
  progressButtonText: string;
  /** Progress text in right of icon progress */
  progressTextTitle: string;
  /** Complete text in buton content when completed prop is true */
  completeText: string;
  /** Click button action */
  handleClick?: () => void;
  /** Icon name for progress section */
  iconProgress?: string;
  /** Progress of challenge completed */
  progress?: number;
  /** All challenges completed */
  completed?: boolean;
  /** ProgressBar color */
  colorProgress?: keysTheme;
  /** Accepted text on progress section */
  acceptedText?: string;
  /** Accepted description text on progress section */
  acceptedDescriptionText?: string;
  /** Window width size */
  screenWidth: number;
}

export const OrganismCardChallenge = ({
  name,
  description,
  image,
  buttonText,
  progressButtonText,
  progressTextTitle,
  completeText,
  handleClick,
  iconProgress = "beer",
  progress = 0,
  completed = false,
  colorProgress = "primary",
  acceptedText = "Accepted",
  acceptedDescriptionText = "",
  screenWidth,
}: ICardChallenge) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <CardChallenge
      height={
        screenWidth <= 768
          ? isOpen
            ? "276px"
            : "172px"
          : isOpen
          ? "508px"
          : "412px"
      }
      backgroundColor={theme.neutral100}
    >
      <CardChallengeImage>
        <AtomImage src={image} alt="image" />
      </CardChallengeImage>

      <CardChallengeInfo>
        <CardChallengeTitle>
          <AtomHeadline
            size={screenWidth <= 768 ? "medium" : "large"}
            text={name}
            weight="light"
            align={screenWidth <= 768 ? "left" : "center"}
            styles={{ margin: "0" }}
          />
        </CardChallengeTitle>

        <CardChallengeDescription>
          <AtomBody
            text={description}
            size={screenWidth <= 768 ? "medium" : "large"}
            weight="regular"
            color={"neutral700"}
            align={screenWidth <= 768 ? "left" : "center"}
          />
        </CardChallengeDescription>
        <CardChallengeButton>
          {progress > 0 && !completed && (
            <ProgressContainer>
              <ProgressButton onClick={() => setIsOpen(!isOpen)}>
                <AtomBody
                  text={progressButtonText}
                  size="medium"
                  weight="semibold"
                  color={"primary"}
                  align="left"
                />
                <IconContainerProgress>
                  <AtomIcon
                    icon={isOpen ? "keyboard_arrow_up" : "keyboard_arrow_down"}
                    size={8}
                    color={"primary"}
                  />
                </IconContainerProgress>
              </ProgressButton>

              <ProgressSection display={isOpen ? "hide" : "none"}>
                <ProgressTitleSection>
                  <IconContainer>
                    <AtomIcon
                      icon={iconProgress}
                      size={18}
                      color={"neutral500"}
                    />
                  </IconContainer>
                  <ProgressTitle>
                    <AtomBody
                      text={progressTextTitle}
                      size="medium"
                      weight="semibold"
                      color={"neutral700"}
                      align="left"
                    />
                  </ProgressTitle>
                </ProgressTitleSection>

                <ProgressSectionContainer>
                  <AtomProgressBar
                    percentage={progress}
                    colorPoints={colorProgress}
                    height="5px"
                  />
                </ProgressSectionContainer>

                <ProgresAceptedSection>
                  <AtomBody
                    text={acceptedText}
                    size="small"
                    weight="semibold"
                    color={"neutral700"}
                    align="left"
                  />
                  <AtomBody
                    text={acceptedDescriptionText}
                    size="small"
                    weight="light"
                    color={"neutral700"}
                    align="right"
                  />
                </ProgresAceptedSection>
              </ProgressSection>
            </ProgressContainer>
          )}
          {completed ? (
            <CompletedButton>
              <AtomBody
                text={completeText}
                size="medium"
                weight="semibold"
                color={"primary"}
                align="left"
              />
              <IconContainer>
                <AtomIcon icon="check" size={15} color={"primary"} />
              </IconContainer>
            </CompletedButton>
          ) : (
            <ActionButtonConteiner>
              <AtomButtonDefault
                disabled={false}
                color="primary"
                text={buttonText}
                type="button"
                width="100%"
                size={screenWidth <= 768 ? "small" : "large"}
                onClick={handleClick}
              />
            </ActionButtonConteiner>
          )}
        </CardChallengeButton>
      </CardChallengeInfo>
    </CardChallenge>
  );
};
