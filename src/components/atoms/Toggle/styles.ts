/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { IPalette } from "interfaces/index";
import styled from "styled-components";

interface ITextStyleProps {
  font: string;
}

interface IStylesProps {
  size?: string;
  focus?: boolean;
  colors: IPalette;
}

interface ItoggleWrapperProps {
  focus?: boolean;
  colors: IPalette;
}
export const ToggleWrapperXs = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  align-items: center;
  padding: 8px 8px 8px 4px;
  min-width: 60px;
  width: fit-content;
  height: 40px;
  box-sizing: border-box;
  border-radius: 8px;
  border: 2px solid ${({ focus, colors }: ItoggleWrapperProps) =>
    focus ? colors.tertiary100 : colors.neutral100}; 
`;
export const LabelTextXs = styled.label`
  display: inline-block;
  font-family: ${({ font }: ITextStyleProps) => font};
  font-style: normal;
  font-size: 16px;
`;

export const ToggleContainerXs = styled.label`
  position: relative;
  display: inline-block;
  width: auto;
  height: ${({ size }: IStylesProps) => (size === "xs" ? "24px" : "16px")};
  min-width:${({ size }: IStylesProps) => (size === "xs" ? "48px" : "32px")};

  input {
    opacity: 0;
    width: 0;
    height: 0;

    &:checked + span.slider,
    &:active + span.slider {
      background-color: ${({ focus, colors }: ItoggleWrapperProps) =>
        focus ? colors.primary400 : colors.primary}
    }

    &:disabled + span.slider {
      background-color: ${({ colors }: IStylesProps) => colors.neutral200};
    }

    &:checked + span.slider:before {
      -webkit-transform: translateX(${({ size }: IStylesProps) =>
        size === "xs" ? "23px" : "14px"});
      -ms-transform: translateX(${({ size }: IStylesProps) =>
        size === "xs" ? "23px" : "14px"});
      transform: translateX(${({ size }: IStylesProps) =>
        size === "xs" ? "23px" : "14px"});
      background-color: ${({ colors }: IStylesProps) => colors.neutral100};
    }

    &:checked:disabled + span.slider:before {
      -webkit-transform: translateX(${({ size }: IStylesProps) =>
        size === "xs" ? "23px" : "14px"});
      -ms-transform: translateX(${({ size }: IStylesProps) =>
        size === "xs" ? "23px" : "14px"});
      transform: translateX(${({ size }: IStylesProps) =>
        size === "xs" ? "23px" : "14px"});
      background-color: ${({ colors }: IStylesProps) => colors.neutral500};
    }

    &:not(checked):disabled + span.slider:before {
      background-color: ${({ colors }: IStylesProps) => colors.neutral500};
    }

    &:checked:disabled:hover + span.slider {
      background-color: ${({ colors }: IStylesProps) => colors.neutral200};
    }

    &:checked:hover + span.slider {
      background-color: ${({ colors }: IStylesProps) => colors.primary300};
    }

    &:checked:focus + span.slider {
      animation-name: colorOn;
      animation-duration: 3s;

        @keyframes colorOn {
          from {
            background-color: ${({ colors }: IStylesProps) => colors.primary400};
            border: 1px solid ${({ colors }: IStylesProps) => colors.primary400};
          }
          to {
            border: ${({ colors }: IStylesProps) => `1px solid ${colors.primary}`}; 
            background-color: ${({ colors }: IStylesProps) => colors.primary};
          }
        }
    }

    &:disabled + span.slider {
      border: ${({ colors }: IStylesProps) => `1px solid ${colors.neutral400}`};
    }

    &:not(:checked):focus + span.slider {
      
      animation-name: colorBorderOFF;
      animation-duration: 3s;

        @keyframes colorBorderOFF {
          from {border: ${({ colors }: IStylesProps) => `1px solid ${colors.primary400}`};}
          to {border: ${({ colors }: IStylesProps) => `1px solid ${colors.primary}`};}
        }
      

      &:before {
        position: absolute;
        content: "";
        height: ${({ size }: IStylesProps) => (size === "xs" ? "20px" : "12px")};
        width: ${({ size }: IStylesProps) => (size === "xs" ? "20px" : "12px")};
        left: 2px;
        bottom: 1px;
        
        -webkit-transition: .5s;
        transition: 1s;
        border-radius: 34px;

        animation-name: colorCircleOff;
        animation-duration: 3s;

        @keyframes colorCircleOff {
          from {background-color: ${({ colors }: IStylesProps) => colors.primary400};}
          to {background-color: ${({ colors }: IStylesProps) => colors.primary};}
        }
      }
    }
  }

  span.slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${({ colors }: IStylesProps) => colors.neutral100};
    border: ${({ colors }: IStylesProps) => `1px solid ${colors.primary}`};

    -webkit-transition: .5s;
    transition: .5s;
    border-radius: 34px;
    
    &:hover {
      border: ${({ colors }: IStylesProps) => `1px solid ${colors.primary300}`};
      
      &:before {
        position: absolute;
        content: "";
        height: ${({ size }: IStylesProps) => (size === "xs" ? "20px" : "12px")};
        width: ${({ size }: IStylesProps) => (size === "xs" ? "20px" : "12px")};
        left: 2px;
        bottom: 1px;
        
        background-color: ${({ colors }: IStylesProps) => colors.primary300};
        -webkit-transition: .5s;
        transition: .5s;
        border-radius: 34px;
      }
    }

    &:not(:hover) {
      border: 1px solid ${({ focus, colors }: ItoggleWrapperProps) =>
        focus ? colors.primary400 : colors.primary};
      
      &:before {
        position: absolute;
        content: "";
        height: ${({ size }: IStylesProps) => (size === "xs" ? "20px" : "12px")};
        width: ${({ size }: IStylesProps) => (size === "xs" ? "20px" : "12px")};
        left: 2px;
        bottom: 1px;
        
        background-color: ${({ focus, colors }: ItoggleWrapperProps) =>
          focus ? colors.primary400 : colors.primary};
        -webkit-transition: .5s;
        transition: .5s;
        border-radius: 34px;
      }
    }

  }
`;

export const StatusText = styled.span`
  vertical-align: middle;
  font-family: ${({ font }: ITextStyleProps) => font};
  margin-left: 5px;
`;
