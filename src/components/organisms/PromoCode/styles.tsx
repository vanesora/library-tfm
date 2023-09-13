import styled from "styled-components";

export const PromoCodeContainer = styled.div`
  input {
      max-width: 234px;
      height: 48px;
      max-height: 48px;
      margin-bottom: 3%;
  }
`;

export const PromoCodeButtonContainer = styled.div`
  max-width: 216px;
  width: 100%;
  @media (max-width: 500px){
    max-width: 100%;
  }
`;

export const PromoCodeIconContainer = styled.div`
  width: 55px;
  height: 55px;
`;
export const PromoCodeError = styled.div`
  margin-bottom: 2%;
`;
