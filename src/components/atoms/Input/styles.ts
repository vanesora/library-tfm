import styled from "styled-components";

interface IStylesProps {
  readOnly?: boolean;
  disabled?: boolean;
  hasError: boolean;
}

export const Input = styled.input<IStylesProps>`
  outline: 0;
  padding: 10px 15px;
  border: 1px solid;
  border-color:${({ readOnly, disabled, hasError }: IStylesProps) =>
    disabled === true
      ? "grey"
      : readOnly === true
      ? "transparent"
      : hasError
      ? "#FF7300"
      : "rgba(0, 0, 0, 0.12)"};
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
    color: ${({ readOnly, disabled, hasError }: IStylesProps) =>
      disabled === true
        ? "grey"
        : readOnly === true
        ? "transparent"
        : hasError
        ? "#FF7300"
        : "rgba(0, 0, 0, 0.12)"};
    font-weight: 400;
  }
`;

export const InputWrapper = styled.div<{ error?: boolean, readOnly: boolean }>`
  width: calc(100% - 20px);
  height: 48px;
  position: relative;
  border: 1px solid ${({ readOnly, error }) => (readOnly? 'none': error ? "#ff7300" : "#646667")};
  border-width: ${({ readOnly, error }) => (readOnly? 'none': error ? "2px" : "1px")};
  border-radius: 8px;
  display: flex;
  align-items: center;
  padding: 1px 10px;
  background-color: #d1d1d1;

  &:focus-within {
    border: 1px solid #2196f3; 
  }
`;

export const StyledInput = styled.input<{ error?: boolean }>`
  width: 100%;
  height: 100%;
  font-size: 16px;
  border: none;
  outline: none;
  color: ${({ error }) => (error ? "#ff7300" : "#646667")};
  background-color: #d1d1d1;

  &:focus {
    border: none;
  }

  &::placeholder{
    color: ${({ error }) => (error ? "#ff7300" : "#646667")};
    font-weight: 400;
  }
`;
