import styled from "styled-components";

interface IStylesProps {
  readOnly?: boolean;
  disabled?: boolean;
  hasError: boolean;
}

export const InputContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const InputPassword = styled.input<IStylesProps>`
  outline: 0;
  padding: 10px 45px 10px 15px;
  border: 1px solid;
  border-color:${({
    readOnly,
    disabled,
    hasError,
  }: IStylesProps) =>
    disabled === true
      ? 'grey'
      : readOnly === true
      ? 'transparent'
      : hasError
      ? '#FF7300'
      : 'rgba(0, 0, 0, 0.12)'};
      background-color:'#C7C7C7;
      color: black;
  box-sizing: border-box;
  width: 100%;
  height: 48px;
  border-radius: 8px;
  &::placeholder{
    color: ${({ readOnly,
      disabled,
      hasError, }: IStylesProps) => disabled === true
      ? 'grey'
      : readOnly === true
      ? 'transparent'
      : hasError
      ? '#FF7300'
      : 'rgba(0, 0, 0, 0.12)'};
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
