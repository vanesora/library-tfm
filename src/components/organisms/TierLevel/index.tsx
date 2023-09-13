import React, { useState, useEffect, useMemo } from "react";
import { keysTheme } from "data/dataMx";
import { AtomCaption } from "react/atoms/Typography/Caption";
import { AtomIcon } from "react/atoms/Icon";
import { AtomProgressBar } from "react/atoms/ProgressBar";
import {
  Tier,
  TierPointsContainer,
  TierPointsNumber,
  TierProgressContainer,
  TierCategoryContainer,
  TierCategoryName,
  TierCategoryRest,
} from "./styles";
import { ITierIcon } from "./TierTypes";
import { CSSObject } from "styled-components";
import { AtomBody } from "react/atoms/Typography/Body";

export interface ITierLevelProps {
  /** Type of Tier */
  type: "desktop" | "mobile";
  /** Tier icon */
  iconName: ITierIcon;
  /** User points */
  actualPoints: number;
  /** Points earned history */
  totalTierPoints: number;
  /** User tier text */
  actualTier: string;
  /** Missing points to the user to reach gold */
  nextPoints: number;
  /** Text points to the user to reach gold */
  nextTier: string;
  /** ProgressBar color */
  colorProgress?: keysTheme;
  /** Handler for click event */
  handleClick?: () => void;
  styles?: CSSObject;
}

export const OrganismsTierLevel = ({
  type,
  iconName,
  actualPoints,
  actualTier,
  totalTierPoints,
  nextPoints,
  nextTier,
  handleClick,
  colorProgress = "quaternary500",
  styles = {},
}: ITierLevelProps) => {
  const progressValue: number = useMemo(() => {
    return totalTierPoints * 100 / (totalTierPoints + nextPoints)
  }, [totalTierPoints,nextPoints]);

  const currencyFormat = (num: number) => {
    const res = new Intl.NumberFormat("de-DE");
    return num < 0 ? "0" : res.format(num);
  };

  return (
    <Tier onClick={handleClick} style={styles}>
      <TierPointsContainer>
        <TierPointsNumber>
          <AtomIcon icon="points" size={13} color={"secondary"} />
          <AtomCaption
            size="xlarge"
            text={`${currencyFormat(actualPoints)}pts`}
          />
        </TierPointsNumber>
        {type === "desktop" && (
          <AtomIcon icon="keyboard_arrow_right" size={10} />
        )}
      </TierPointsContainer>
      {type === "desktop" && (
        <>
          <TierProgressContainer>
            <AtomProgressBar
              percentage={!isNaN(progressValue) ? progressValue : 100}
              colorPoints={colorProgress}
            />
          </TierProgressContainer>
          <TierCategoryContainer
            align={nextPoints == 0 ? "center" : "space-between"}
          >
            <TierCategoryName>
              <AtomIcon icon={iconName} size={15} />
              <AtomCaption size="medium" text={actualTier} />
            </TierCategoryName>
            {nextPoints != 0 && (
              <TierCategoryRest>
                <AtomBody
                  size="small"
                  weight="bold"
                  text={currencyFormat(nextPoints)}
                />
                <AtomBody
                  size="small"
                  text={nextTier}
                  weight="regular"
                  styles={{ marginLeft: "3%" }}
                />
              </TierCategoryRest>
            )}
          </TierCategoryContainer>
        </>
      )}
    </Tier>
  );
};
