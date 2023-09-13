import styled from "styled-components";
import { colors, theme, mxSetup } from "data/dataMx";

const {
  mediaQuery: { tablet },
} = mxSetup;

interface IStylesProps {
  backgroundColor?: colors;
  background?: string;
  colorLine?: colors;
  textPositionLeft?: string;
  textPositionTop?: string;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ backgroundColor }: IStylesProps) =>
    backgroundColor || theme.primary};
  position: relative;

  h4{
    margin: 16px 0px;
  }
`;

export const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  margin: 0;
`;

export const Content = styled.div`
  position: inherit;
  width: 100%;
  background: ${({ background }: IStylesProps) =>
    background || theme.transparent};
  padding: 0px 112px;
  
  @media (max-width: ${tablet.min} ) {
    padding: 0px;
  }
`;

export const ListWrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 0px 6px 16px 20px;
  margin-right: -20px;

  div label{
    margin-left: -20px;
  }

  div img{
    margin-left: -30px;
  }

  @media (max-width: ${tablet.min} ) {
    div label{
      margin-left: 0px;
      font-size: 10px;
    }
    div img{
      margin-left: 0px;
      width: 110px;
      height: 110px;
    }
    svg {
      width: 44px;
      height: 44px;
    }
  }
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  background: ${theme.transparent};
  width: 100%;
  list-style-type: none;
  float: left;
  position: relative;

  &::after {
    content: '';
    position: relative;
    width: 100%;
    height: 1px;
    background-color: ${({ colorLine }: IStylesProps) =>
      colorLine || theme.neutral100};
    top: 0px;
    left: 0px;
  }

  &::first-child:after {
    content: none;
  }
`;

export const WrapperReward = styled.div`
  position: relative;
  margin-left: -20px;
  text-align: center;
`;

export const WrapperText = styled.div`
  position: absolute;
  left: ${({ textPositionLeft }: IStylesProps) => textPositionLeft || "27%"};
  right: 20%;
  top: ${({ textPositionTop }: IStylesProps) => textPositionTop || "27%"};
  
  @media (max-width: ${tablet.min} ) {
    left: 25%;
    top: 25%;
  }
`;
