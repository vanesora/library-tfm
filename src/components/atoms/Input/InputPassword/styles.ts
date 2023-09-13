import { IPalette } from "interfaces/index";
import styled, { CSSObject } from "styled-components";

interface IStylesProps {
  disabled?: boolean;
  hasError: boolean;
  styles?: CSSObject;
  colors?: IPalette;
}

export const InputContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const InputPassword = styled.input`
  ${({ styles }) => styles};
  outline: 0;
  padding: 10px 45px 10px 15px;
  border: 1px solid;
  border: ${({ colors }) =>
    `1px solid ${colors != null ? colors.neutral400 : ""}`};
  border-color:${({ disabled, hasError, colors }: IStylesProps) =>
    disabled === true
      ? colors?.neutral300
      : hasError
      ? colors?.secondary400
      : colors?.neutral400};
  background-color:${({ disabled, colors }: IStylesProps) =>
    disabled === true ? colors?.neutral300 : colors?.neutral100};
  color:${({ disabled, colors }: IStylesProps) =>
    disabled === true ? colors?.neutral600 : colors?.neutral700};
  box-sizing: border-box;
  width: 100%;
  height: 48px;
  border-radius: 8px;
  
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &:focus{
    border-color: ${({ colors, hasError }: IStylesProps) =>
      !hasError ? colors?.neutral700 : colors?.secondary400};
  }
  &::placeholder{
    color: ${({ colors }) => colors?.neutral500};
    font-weight: 400;
  }
`;

export const ShowPassword = styled.div`
  position: absolute;
  right: 0;
  top:0;
  cursor: pointer;
  background-color: transparent;
  margin-right: 15px;
  margin-top: 10px;
`;

export const HelperTextContainer = styled.div`
  margin-top: 4px;
`;
