import styled from "styled-components";

export const ButtonBadgeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

export const Separator = styled.div`
  margin-bottom: 10px;
`;

export const SealImageContainer = styled.div`
  position: relative;

  img {
    position: absolute;
    margin: auto;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    text-align: center;
    max-width: 50%;
  }
`;
