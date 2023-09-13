import React, { useContext, useRef, useEffect, useState } from "react";
import {
  TooltipContainer,
  TooltipWrapper,
  Arrow,
  TooltipText,
  TooltipContent,
} from "./styles";
import { ThemeContext } from "context/context";
import { CSSProperties } from "styled-components";

export type TooltipPlacement = "top" | "bottom" | "left" | "right";

export interface ITooltipProps {
  /** If true tooltip will be visible */
  show?: boolean;
  /** Position relative to children where the tooltip will be shown  */
  placement?: TooltipPlacement;
  /** A react node that will be shown instead of tooltip text */
  content?: any;
  /** ToolTip inner text */
  text?: string;
  children?: any;
  /** Size of tooltip arrow */
  arrowSize?: number;
  /** Distance between tooltip and children */
  tooltipMargin?: number;
  /** if true there will be no tooltip arrow */
  removeArrow?: boolean;
  /** Height of the tooltip */
  tooltipHeight?: string;
  /** Width of the tooltip */
  tooltipWidth?: string;
  /** Styles fot the tooltip text */
  customTextStyle?: CSSProperties;
  /** If true and show is false, the tooltip will be show when hover the children */
  preventHover?: boolean;
}

export const AtomTooltip = ({
  text = "",
  placement = "top",
  arrowSize = 6,
  tooltipMargin = 5,
  removeArrow = false,
  preventHover = false,
  tooltipHeight = "auto",
  tooltipWidth = "80px",
  show = false,
  children,
  content,
  customTextStyle,
}: ITooltipProps) => {
  const { fontFamily, palette } = useContext(ThemeContext);
  const [tooltipHeightAuto, setTooltipHeightAuto] = useState(0);
  const [tooltipWidthAuto, setTooltipWidthAuto] = useState(0);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState(show);

  useEffect(() => {
    setTooltipHeightAuto(
      (prevState) => tooltipRef.current?.clientHeight || prevState
    );
    setTooltipWidthAuto(
      (prevState) => tooltipRef.current?.clientWidth || prevState
    );
  }, [
    tooltipRef,
    placement,
    show,
    isActive,
    text,
    arrowSize,
    tooltipMargin,
    tooltipHeight,
    tooltipWidth,
  ]);

  return (
    <TooltipContainer
      onMouseEnter={() => (!preventHover ? setIsActive(true) : null)}
      onMouseLeave={() => (!preventHover ? setIsActive(false) : null)}
    >
      <>
        {children}
        {(isActive || show) && (
          <>
            <TooltipWrapper
              colorPalette={palette} 
              data-testId="TooltipWrapper"
              ref={tooltipRef}
              placement={placement}
              removeArrow={removeArrow}
              arrowSize={arrowSize}
              tooltipMargin={tooltipMargin}
              tooltipHeight={tooltipHeightAuto}
              tooltipWidth={tooltipWidthAuto}
            >
              <TooltipContent
                contentHeight={tooltipHeight}
                contentWidth={tooltipWidth}
              >
                {content || (
                  <TooltipText colorPalette={palette} style={customTextStyle} fontFamily={fontFamily}>
                    {text}
                  </TooltipText>
                )}
              </TooltipContent>
            </TooltipWrapper>
            {removeArrow ? null : (
              <Arrow
                placement={placement}
                removeArrow={removeArrow}
                arrowSize={arrowSize}
                tooltipMargin={tooltipMargin}
                tooltipHeight={tooltipHeightAuto}
                tooltipWidth={tooltipWidthAuto}
              />
            )}
          </>
        )}
      </>
    </TooltipContainer>
  );
};
