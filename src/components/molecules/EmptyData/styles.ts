import styled from "styled-components";

interface IStyleProps {
  height: string;
}

export const EmptyDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: ${({ height }: IStyleProps) => height};

  a {
    margin: 24px auto;
    cursor: pointer;
    span label {
      font-weight: 600;
      cursor: pointer;
    }
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;
