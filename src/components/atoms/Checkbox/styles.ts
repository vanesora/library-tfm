import { colors } from "data/dataMx";
import styled, { CSSObject } from "styled-components";

interface IStylesProps {
  color?: colors;
  colorDisabled?: colors;
  /** Styles in format CSSObject */
  styles?: CSSObject;
}

export const Input = styled.input`
  margin: 0;
  margin-top: 2px;
  height: 18px;
  width: 18px;
  min-width: 18px;
  -webkit-appearance: none;
  appearance: none;
  border: 2px solid ${({ color }: IStylesProps) => color};
  border-radius: 4px;
  transform: translateY(-0.075em);
  display: grid;
  place-content: center;
  
  &::before {
    background-color: white;
    content: "";
    width: 10px;
    height: 10px;
    transform: scale(0);
    transition: .3s all ease-in-out;
    clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
  }

  &:disabled {
    border-color: ${({ colorDisabled }: IStylesProps) => colorDisabled};
  }

  &:checked {
    background-color: ${({ color }: IStylesProps) => color};
    &::before {
      transform: scale(1);
    }
    &:disabled {
      background-color: ${({ colorDisabled }: IStylesProps) => colorDisabled};
    }
  }
  ${({ styles }: IStylesProps) => styles}
`;

export const CheckboxContainer = styled.div`
  display: flex;
`