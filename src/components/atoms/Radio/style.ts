import styled from "styled-components";
import { IFont, IPalette } from "interfaces";

interface IColors {
  colors: IPalette
}

interface ILabelStyleProps {
  fontFamily: IFont;
  disabled: boolean;
  colors: IPalette;
}

interface IRadioStyleProps {
  disabled: boolean;
  colors: IPalette;
}

interface IInputStyleProps {
  disabled: boolean;
  colors: IPalette;
}

export const RadioContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  min-height: 48px;
  padding-left: 8px;
  padding-right: 8px;
  border: ${({ colors }: IColors) => `4px solid ${colors.transparent}`};
  &:active {
    border: ${({ colors }: IColors) => `4px solid ${colors.tertiary100}`};
  }
`;

export const RadioLabel = styled.label`
  font-family: ${({ fontFamily }: ILabelStyleProps) => fontFamily.main.bold};
  font-size: 16px;
  margin-left: 8px;
  color: ${({ disabled, colors }: ILabelStyleProps) =>
    disabled ? colors.neutral400 : colors.neutral700};
`;

export const RadioInput = styled.div`
  height: 20px;
  width: 20px;
  border-radius: 100px;
  border-width: 2px;
  border-style: solid;
  border-color: ${({ disabled, colors }: IInputStyleProps) =>
    disabled ? colors.neutral400 : colors.neutral700};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RadioCheck = styled.div`
  height: 12px;
  width: 12px;
  border-radius: 100px;
  background-color: ${({ disabled, colors }: IRadioStyleProps) =>
    disabled ? colors.neutral400 : colors.neutral700};
`;
