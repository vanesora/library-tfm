/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import styled, { css } from "styled-components";

export const commonStyles = css`
  position: relative;
  display: inline-block;
  height: 34px;
  border-radius: 34px;
`;

export const smallStyles = css<{ withText?: boolean}>`
  width: ${({ withText }) => (withText ? "60px" : "40px")};
`;

export const mediumStyles = css<{ withText?: boolean, size?: 'small' | 'medium' }>`
  width: ${({ withText }) => (withText ? "80px" : "60px")};
`;

export const ToggleSwitchContainer = styled.label<{ size?: 'small' | 'medium' }>`
  ${commonStyles};
  ${({ size }) => (size === "small" ? smallStyles : mediumStyles)};
`;

export const Slider = styled.span<{ disabled?: boolean }>`
  position: absolute;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ disabled }) => (disabled ? "#ccc" : "#ccc")};
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 34px;

  &:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 50%;
  }
`;

export const HiddenInput = styled.input.attrs({ type: "checkbox" })`
  display: none;

  &:checked + ${Slider} {
    background-color: ${({ disabled }) => (disabled ? "#ccc" : "#2196F3")};
  }

  &:checked + ${Slider}:before {
    -webkit-transform: ${({ disabled }) =>
      disabled ? "translateX(0)" : "translateX(26px)"};
    -ms-transform: ${({ disabled }) =>
      disabled ? "translateX(0)" : "translateX(26px)"};
    transform: ${({ disabled }) =>
      disabled ? "translateX(0)" : "translateX(26px)"};
  }
`;

export const Text = styled.span<{ disabled?: boolean }>`
  margin-left: 10px;
  font-size: 14px;
  color: ${({ disabled }) => (disabled ? "#ccc" : "#333")};
`;
