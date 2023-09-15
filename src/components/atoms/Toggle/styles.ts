/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import styled from "styled-components";

interface ITextStyleProps {
  font: string;
}

interface IStylesProps {
  size?: string;
  focus?: boolean;
}

interface ItoggleWrapperProps {
  focus?: boolean;
}
export const ToggleWrapperXs = styled.div<ItoggleWrapperProps>`
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
  border: 2px solid;
  boder-color: ${({ focus }: ItoggleWrapperProps) =>
    focus ? '#090088' :  '#767171'}; 
`;
export const LabelTextXs = styled.label`
  display: inline-block;
  font-style: normal;
  font-size: 16px;
`;

export const ToggleContainerXs = styled.label<IStylesProps>`
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
      background-color: ${({ focus }: ItoggleWrapperProps) =>
        focus ? '#090088' :  '#767171'}
    }

    &:disabled + span.slider {
      background-color: #767171;
    }

    &:checked + span.slider:before {
      -webkit-transform: translateX(${({ size }: IStylesProps) =>
        size === "xs" ? "23px" : "14px"});
      -ms-transform: translateX(${({ size }: IStylesProps) =>
        size === "xs" ? "23px" : "14px"});
      transform: translateX(${({ size }: IStylesProps) =>
        size === "xs" ? "23px" : "14px"});
      background-color: #767171;
    }

    &:checked:disabled + span.slider:before {
      -webkit-transform: translateX(${({ size }: IStylesProps) =>
        size === "xs" ? "23px" : "14px"});
      -ms-transform: translateX(${({ size }: IStylesProps) =>
        size === "xs" ? "23px" : "14px"});
      transform: translateX(${({ size }: IStylesProps) =>
        size === "xs" ? "23px" : "14px"});
    }

  }
`;

export const StatusText = styled.span`
  vertical-align: middle;
  margin-left: 5px;
`;
