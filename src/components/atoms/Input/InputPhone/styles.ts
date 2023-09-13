import styled from "styled-components";
import { IInputAlign } from "./InputPhoneTypes";

interface IStylesProps {
  align: IInputAlign;
}

export const InputPhone = styled.div`
  display: flex;
  flex-direction:${({ align }: IStylesProps) =>
    align == "colum" ? "column" : "row"};
  width: 100%;
`;

export const ContainerInput = styled.div`
  padding: 0;
  padding-left:${({ align }: IStylesProps) =>
    align == "colum" ? "0" : align == "default" ? "11px" : "6px"};
  margin-top:${({ align }: IStylesProps) => (align == "colum" ? "17px" : "0")};
  width: 100%;
`;

export const ContainerCountryPicker = styled.div`
  padding: 0;
  padding-right:${({ align }: IStylesProps) =>
    align == "colum" ? "0" : align == "default" ? "11px" : "6px"};
  width: ${({ align }: IStylesProps) => (align == "short" ? "180px" : "100%")};

  label{
    white-space: nowrap;
  }
`;

export const Container = styled.div`
width: 100%;
`;
