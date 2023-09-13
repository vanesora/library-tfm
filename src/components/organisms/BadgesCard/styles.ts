import styled from "styled-components";
import { mxSetup } from "data/dataMx";

const {
  mediaQuery: { tablet },
} = mxSetup;

export const CardBody = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 24px;

  @media (max-width: ${tablet.min} ) {
    flex-direction: column;
    margin: 24px 0px;
  }
`;

export const BoxImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
  margin-right: 60px;

  @media (max-width: ${tablet.min} ) {
    margin: 0px;
  }
`;

export const ContainerBadges = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  overflow: hidden;
  flex-wrap: wrap;
  margin-right: 40px;
  
  @media (max-width: ${tablet.min} ) {
    margin: 0px;
  }
`;

export const ContainerBadge = styled.div`
  position: relative;
  padding-top: 20px;
  width: 25%;
`;
