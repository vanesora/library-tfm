import { mxSetup } from "data/dataMx";
import styled from "styled-components";

const {
  mediaQuery: { desktop },
} = mxSetup;

interface IWrapperButton {
  margin: string;
}

interface IContainer {
  background: string;
}

export const Container = styled.div`
  align-items: center;
  background-color: ${({ background }: IContainer) => background};
  display: flex;
  height: 100%;
  justify-content: center;
  position: fixed;
  right: 0;
  top: 0;
  width: 100%;
  z-index: 9999;
`;

export const WapperText = styled.div`
`;

export const WrapperBtn = styled.div`
  display: flex;
  margin-top: ${({ margin }: IWrapperButton) => margin};
`;
