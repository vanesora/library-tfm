import styled from "styled-components";
import { colors } from "data/dataMx";

interface IQuantityContainer {
  color: colors;
}

interface ISvgContainer {
  color: colors;
}

export const QuantityContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  input {
    border: 1px solid ${({ color }: IQuantityContainer) => color};
    border-radius: 8px;
    width: 100px;
    height: 48px;
    padding: 0px 16px 0px 16px;
    margin-left: 10px;
    margin-right: 10px;
    text-align: center;
  }
`;

export const InputContainer = styled.div`
  svg {
    fill: ${({ color }: ISvgContainer) => color};
  }
`;

export const ButtonContainer = styled.div`
  svg {
    fill: ${({ color }: ISvgContainer) => color};
  }
`;
