import styled from "styled-components";

interface IStylesProps {
  readOnly?: boolean;
  disabled?: boolean;
  hasError: boolean;
}

export const Input = styled.input <IStylesProps>`
  outline: 0;
  padding: 10px 15px;
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
  border-radius: 4px;

  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
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
