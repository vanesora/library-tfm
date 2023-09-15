import styled from "styled-components";


interface IStylesProps {
  flex: string;
  widthHook: number
}

interface IIconProps {
  selected: boolean
}

export const GeneralStyledButton = styled.button<IStylesProps>`
  cursor: pointer;
  align-items: center;
  background-color: transparent;
      : colorPalette.secondary)};
  display: flex;
  flex-direction: ${({ flex }: IStylesProps) => flex};
  height: 60px;
  justify-content: center;
  width:  ${({ widthHook }: IStylesProps) => widthHook > 700? '60px' : '100%'} ;
  padding: 5px;

  &:hover {
    svg{
      fill: #FF7300 !important;
    }

    span{
      color: #FF7300 !important; 
    }
  }

`;

export const ContainerIcon = styled.div<IIconProps>`
  border-bottom: ${({ selected }: IIconProps) =>
  selected? '2px solid #456db3' : 'none'};
`;
