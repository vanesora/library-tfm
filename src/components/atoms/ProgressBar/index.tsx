import React, { useContext, useEffect, useState } from "react";
import { ContentProgress, Progress } from "./styles";
import { keysTheme } from "data/dataMx";
import { ThemeContext } from "context/context";

export interface IProgressBarProps {
  /** Background color for process bar */
  background?: keysTheme;
  /** Background color for process percentage */
  colorPoints?: keysTheme;
  /** Percentage displayed on the progress bar from 0 to 100 */
  percentage: number;
  /** Progress bar height */
  height?: string;
  /** Name of animation */
  animationName?: string;
}

export const AtomProgressBar = ({
  background = "neutral300",
  colorPoints = "quaternary500",
  percentage,
  height = "10px",
  animationName = "loading",
}: IProgressBarProps) => {
  const [styles, setStyles] = useState({});
  const styleElement = document.createElement("style");
  const keyframesStyle = `@keyframes ${animationName} {from { width: 0%; }to{ width: ${percentage}%;}}`;

  const { palette } = useContext(ThemeContext);

  const injectStyle = (style: string) => {
    document.head.appendChild(styleElement);
    const styleSheet = styleElement.sheet;

    styleSheet && styleSheet.insertRule(style, styleSheet.cssRules.length);
  };

  const setValues = () => {
    if (!Object.keys(styles).length) {
      const animationKey = `${animationName} 2000ms ease-out 500ms 1 normal forwards`;
      injectStyle(keyframesStyle);
      setStyles({
        WebkitAnimation: animationKey,
        animation: animationKey,
        background: palette[colorPoints],
        borderRadius: "10px",
        height: "100%",
        position: "absolute",
        zIndex: 1,
      });
    }
  };

  useEffect(() => {
    setStyles({});
  }, [percentage, colorPoints]);

  useEffect(() => {
    setValues();
  }, [styles]);

  return (
    <ContentProgress background={palette[background]} height={height}>
      <Progress style={styles} />
    </ContentProgress>
  );
};
