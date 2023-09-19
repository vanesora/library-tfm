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
  background-color: #262626;
  display: flex;
  flex-direction: ${({ flex }: IStylesProps) => flex};
  height: 60px;
  justify-content: ${({ widthHook }: IStylesProps) => widthHook > 700? 'center' : 'start'};
  width:  ${({ widthHook }: IStylesProps) => widthHook > 700? '60px' : '100%'} ;
  padding: 5px;

  h2{
    margin: 0;
  }
`;

export const ContainerIcon = styled.div<IIconProps>`
  border-bottom: ${({ selected }: IIconProps) =>
  selected? '2px solid #456db3' : 'none'};
`;
