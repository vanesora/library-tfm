import styled from "styled-components";
import { TooltipPlacement } from "./index";
import { IFont } from "../../../../interfaces/index";
import { IPalette } from "interfaces/index";

interface IStyleProps {
  placement: TooltipPlacement;
  removeArrow: boolean;
  arrowSize: number;
  tooltipMargin: number;
  tooltipHeight: number;
  tooltipWidth: number;
  colorPalette?: IPalette;
}

interface ITooltipTextProps {
  fontFamily: IFont;
  colorPalette?: IPalette;
}

interface ITooltipContentProps {
  contentHeight: string;
  contentWidth: string;
}

interface IPal {
  colorPalette?: IPalette;
}

const calculateVerticalPosition = ({
  placement,
  removeArrow,
  arrowSize,
  tooltipMargin,
  tooltipHeight,
}: IStyleProps) => {
  switch (placement) {
    case "top":
    case "bottom":
      return `${placement}: ${
        removeArrow
          ? `-${tooltipMargin + tooltipHeight}px`
          : `-${tooltipMargin + arrowSize + tooltipHeight}px`
      }`;
    case "left":
    case "right":
      return "top: 50%";
  }
};

const calculateHorizontalPosition = ({
  placement,
  removeArrow,
  arrowSize,
  tooltipMargin,
  tooltipWidth,
}: IStyleProps) => {
  switch (placement) {
    case "left":
    case "right":
      return `${placement}: ${
        removeArrow
          ? `-${tooltipMargin + tooltipWidth}px`
          : `-${tooltipMargin + arrowSize + tooltipWidth - 1}px`
      }`;
    case "top":
    case "bottom":
      return `left: 50%`;
  }
};

const calculateTransformTranslate = ({
  placement,
  tooltipHeight,
  tooltipWidth,
}: IStyleProps) => {
  switch (placement) {
    case "left":
    case "right":
      return `transform: translateY(-${tooltipHeight / 2}px)`;
    case "top":
    case "bottom":
      return `transform: translateX(-${tooltipWidth / 2}px)`;
  }
};

const calculateBorderWidth = ({ placement, arrowSize }: IStyleProps) => {
  return `
    border-top-width: ${placement == "bottom" ? 0 : `${arrowSize}px`};
    border-right-width: ${placement == "left" ? 0 : `${arrowSize}px`};
    border-bottom-width: ${placement == "top" ? 0 : `${arrowSize}px`};
    border-left-width: ${placement == "right" ? 0 : `${arrowSize}px`};
  `;
};

const calculateBorderColor = ({ placement, colorPalette }: IStyleProps) => {
  return `
    border-top-color: ${
      placement == "top" ? colorPalette?.neutral700 : colorPalette?.transparent
    };
    border-right-color: ${
      placement == "right"
        ? colorPalette?.neutral700
        : colorPalette?.transparent
    };
    border-bottom-color: ${
      placement == "bottom"
        ? colorPalette?.neutral700
        : colorPalette?.transparent
    };
    border-left-color: ${
      placement == "left" ? colorPalette?.neutral700 : colorPalette?.transparent
    };
  `;
};

const calculateArrowPosition = ({
  placement,
  tooltipMargin,
  arrowSize,
}: IStyleProps) => {
  switch (placement) {
    case "top":
      return `
        top: -${tooltipMargin + arrowSize}px;
        left: 50%;
        transform: translateX(-${arrowSize}px); 
      `;
    case "bottom":
      return `
        bottom: -${tooltipMargin + arrowSize}px;
        left: 50%;
        transform: translateX(-${arrowSize}px); 
      `;
    case "right":
      return `
          top: 50%;
          right: -${tooltipMargin + arrowSize}px;
          transform: translateY(-${arrowSize}px); 
        `;
    case "left":
      return `
        top: 50%;
        left: -${tooltipMargin + arrowSize}px;
        transform: translateY(-${arrowSize}px); 
      `;
  }
};

export const TooltipContainer = styled.div`
  position: relative;
  z-index: 5000;
`;

export const TooltipWrapper = styled.div`
  position: absolute;
  border-radius: 4px;
  background: ${({ colorPalette }: IStyleProps) => colorPalette?.neutral700}; 
  ${calculateVerticalPosition};
  ${calculateHorizontalPosition};
  ${calculateTransformTranslate};
`;

export const Arrow = styled.div`
  width: 0;
  height:0;
  border-style: solid;
  position: absolute;

  ${calculateBorderWidth};
  ${calculateBorderColor};
  ${calculateArrowPosition};
`;

export const TooltipContent = styled.div`
  padding: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  width:${({ contentWidth }: ITooltipContentProps) => contentWidth};
  height: ${({ contentHeight }: ITooltipContentProps) => contentHeight};
`;

export const TooltipText = styled.p`
  color: ${({ colorPalette }: ITooltipTextProps) => colorPalette?.secondary};
  font-family: ${({ fontFamily }: ITooltipTextProps) => fontFamily.main.bold};
  font-size: 12px;
  margin: 0;
  text-align: center;
`;
