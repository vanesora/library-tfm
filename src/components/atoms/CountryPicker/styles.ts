import styled, { CSSObject } from "styled-components";
import { IPalette } from "interfaces/index";

interface IStylesProps {
  disabled: boolean;
  readOnly?: boolean;
  hasError?: boolean;
  actualValue?: boolean;
  backGround?: string;
  minWidth?: string;
  styles?: CSSObject;
  colorPalette: IPalette;
}

export const Select = styled.div`
  width: 100%;
  position: relative;
`;

export const ContainerInput = styled.div`
  position: relative;
  width: 100%;
  min-width: ${({ minWidth }: IStylesProps) => minWidth};
`;

export const ContainerIconFlag = styled.div`
  position: absolute;
  left: 10px;
  top: 12px;
`;

export const Value = styled.input`
  ${({ styles }) => styles}
  height: 48px;
  border: 1px solid ;
  border-color:${({ readOnly, disabled, hasError, colorPalette}: IStylesProps) =>
    disabled === true
      ? colorPalette.neutral300
      : readOnly === true
      ? colorPalette.transparent
      : hasError
      ? colorPalette.secondary400
      : colorPalette.neutral400};
  box-sizing: border-box;
  border-radius: 8px;
  display: flex;
  align-items: center;
  padding: 14px;
  background-color: ${({ disabled, colorPalette}: IStylesProps) =>
    disabled === true ? colorPalette.neutral300 : colorPalette.neutral100};
  color:${({ disabled, colorPalette}: IStylesProps) =>
    disabled === true ? colorPalette.neutral600 : colorPalette.neutral700};
  width: 100%;

  &:focus {
    border: ${({ disabled, colorPalette }: IStylesProps) =>
      disabled ? "none" : `1px solid ${colorPalette.neutral700}`};
    outline: none;
  }

  &:active {
    border: ${({ disabled, colorPalette }: IStylesProps) =>
      disabled ? "none" : `1px solid ${colorPalette.neutral700}`};
    outline: none;
  }

  &::placeholder{
    color: ${({ actualValue, colorPalette }: IStylesProps) =>
      actualValue ? colorPalette.neutral700 : colorPalette.neutral500};
    padding-left: ${({ actualValue }: IStylesProps) =>
      actualValue ? "27px" : "0"};
  }
`;

export const ContainerIcon = styled.div`
  position: absolute;
  right: 15px;
  top: 16px;
`;

export const Option = styled.ul`
  background-color: ${({ theme }) => theme.transparent};
  padding: 16px;
  box-shadow: 0px 4px 16px rgba(116, 134, 141, 0.2);
  min-width: 200px;
  position: absolute;
  margin: 0;
  top:56px;
  left: 0;
  right: 0px;
  max-height: 200px;
  overflow-y: scroll;
  z-index: 2;
`;

export const ItemContainer = styled.li`
  display: flex;
  align-items: center;
  height: 40px;
  background-color: ${({ backGround }: IStylesProps) => backGround};
  border-radius: 8px;

  &:hover {
    label{
      color:${({ colorPalette }) => colorPalette.neutral700};
    }
  }

  svg {
    min-width:24px
  }
`;

export const ContainerIconOptions = styled.div`
  min-width: 24px;
`;

export const ContainerText = styled.div`
  margin-left: 8px;
`;
