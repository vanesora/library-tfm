import styled from "styled-components";

interface IStylesProps {
  disabled: boolean;
}

export const GeneralStyledBtn = styled.button`
  cursor: pointer;
  align-items: start;
  border: none;
  color: #090088;
  display: flex;
  font-size: 32px;
  font-weight: 700;
  height: 60px;
  outline: none;
  justify-content: left;
  align-items: center;
    background-color: transparent;

  &:hover {
    label{
      color: ${({ disabled }) =>
        disabled ? '#767171' : '#456db3'};
    }

    svg{
      fill: #456db3;
    }
  }
`;
