import { IPalette } from "interfaces/index";
import styled, { CSSObject } from "styled-components";

interface IStylesProps {
  width: string;
  minWidth: string;
  disabled: boolean;
  styles?: CSSObject;
  arrowColor?: string;
  colorPalette: IPalette;
}

export const GeneralStyledBtn = styled.button`
  ${({ styles }) => styles}
  cursor: pointer;
  align-items: center;
  background-color: ${({ colorPalette }) => colorPalette.transparent};
  border-radius: 4px;
  border: none;
  color: ${({ colorPalette }) => colorPalette.neutral600};
  display: flex;
  font-size: 14px;
  font-weight: 700;
  height: 22px;
  outline: none;
  justify-content: start;
  letter-spacing: 0.5px;
  line-height: 16px;
  width: ${({ width }: IStylesProps) => width};
  min-width: ${({ minWidth }: IStylesProps) => minWidth};

  &:hover {
    label{
      color: ${({ disabled, colorPalette }) =>
        disabled ? colorPalette.primary : colorPalette.neutral700};
    }

    svg{
      fill: ${({ disabled, colorPalette, arrowColor }) =>
        disabled
          ? colorPalette.neutral500
          : arrowColor ?? colorPalette.neutral700};
    }
  }

  &:focus {
    label{
      color: ${({ disabled, colorPalette }) =>
        disabled ? colorPalette.neutral500 : colorPalette.neutral700};
    }

    svg{
      fill: ${({ disabled, colorPalette }) =>
        disabled ? colorPalette.neutral500 : colorPalette.neutral700};
    }
  }
`;
