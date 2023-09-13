import styled from "styled-components";
interface IStylesProps {
  height?: string;
  display?: string;
  backgroundColor?: string;
}

export const CardChallenge = styled.article`
  width: 396px;
  height: ${({ height }: IStylesProps) => height};
  background-color: ${({ backgroundColor }: IStylesProps) => backgroundColor};
  box-shadow: 0px 4px 12px rgba(189, 189, 189, 0.25);
  border-radius: 8px;
  overflow: hidden;
  transition: all ease .3s;
  
  display: flex;

  &:hover {
    box-shadow: 0px 4px 12px rgba(100, 100, 100, 0.25)
  }

  @media (min-width: 1280px){
    flex-direction: column;
    justify-content: center;
    align-items: center; 
  }

  @media (max-width: 1280px){
    flex-direction: column;
    justify-content: center;
    align-items: center; 
  }

  @media (max-width: 768px){
    flex-direction: row;
  }

  @media (max-width: 460px){
    flex-direction: row;
  }
`;

export const CardChallengeImage = styled.figure`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: 100%;
  }

  @media (min-width: 1280px){
    width: 364px;
    height: 113px;
  }

  @media (max-width: 1280px){
    width: 364px;
    height: 113px;
  }

  @media (max-width: 768px){
    width: 104px;
    height: 172px;
    margin: 0;
    margin-right: 16px;
  }

  @media (max-width: 460px){
    width: 104px;
    height: 172px;
    margin: 0;
    margin-right: 16px;
  }
`;

export const CardChallengeInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const CardChallengeTitle = styled.section`

  @media (min-width: 1280px){
    width: 100%;
    height: 32px;
    margin-top: 5px;
  }

  @media (max-width: 1280px){
    width: 100%;
    height: 32px;
    margin-top: 5px;
  }

  @media (max-width: 768px){
    width: 228px;
    height: 28px;
    margin-top: 16px;
    margin-right: 16px;
  }

  @media (max-width: 460px){
    width: 228px;
    height: 28px;
    margin-top: 16px;
    margin-right: 16px;
  }
`;

export const CardChallengeDescription = styled.section`

  @media (min-width: 1280px){
    width: 100%;
    height: 72px;
    margin-top: 32px;
    justify-content: center;
    align-items: center;
    padding-left: 40px;
    padding-right: 40px;
  }

  @media (max-width: 1280px){
    width: 100%;
    height: 72px;
    margin-top: 32px;
    justify-content: center;
    align-items: center;
    padding-left: 40px;
    padding-right: 40px;
  }

  @media (max-width: 768px){
    width: 260px;
    height: 40px;
    margin-top: 8px;
    padding-left: 0px;
    padding-right: 0px;
  }

  @media (max-width: 460px){
    width: 260px;
    height: 40px;
    margin-top: 8px;
    padding-left: 0px;
    padding-right: 0px;
  }
`;

export const CardChallengeButton = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  
  button {
    width: 204px;
    align-self: flex-end;
  }
`;

export const ProgressButton = styled.section`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const IconContainer = styled.section`
  margin-left: 5px;
  margin-top: 2px;
`;

export const IconContainerProgress = styled.section`
  margin-left: 10px;
`;

export const ProgressContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  @media (min-width: 1280px){
    padding-left: 40px;
    padding-right: 40px;
    margin-top: 20px;
  }

  @media (max-width: 1280px){
    padding-left: 40px;
    padding-right: 40px;
    margin-top: 20px;
  }

  @media (max-width: 768px){
    padding-left: 0px;
    padding-right: 15px;
    margin-top: 10px;
  }

  @media (max-width: 460px){
    padding-left: 0px;
    padding-right: 15px;
    margin-top: 10px;
  }
`;

export const ProgressTitleSection = styled.section`
  display: flex;
  flex-direction: row;
  margin-top: 22px;
  margin-left: -5px;
`;

export const ProgressTitle = styled.section`
  margin-left: 10px;
`;

export const ProgressSectionContainer = styled.section`
  width: 100%;
`;

export const ProgresAceptedSection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ProgressSection = styled.section`
  display: ${({ display }: IStylesProps) => display};
`;

export const CompletedButton = styled.section`
  display: flex;
  flex-direction: row;
  width: 100%;

  @media (min-width: 1280px){
    height: 64px;
    justify-content: center;
    align-items: center;
    margin-top: auto;
    margin-bottom: 33px;
  }

  @media (max-width: 1280px){
    height: 64px;
    justify-content: center;
    align-items: center;
    margin-top: auto;
    margin-bottom: 33px;
  }

  @media (max-width: 768px){
    height: 32px;
    justify-content: left;
    margin-bottom: 24px;
  }

  @media (max-width: 460px){
    height: 32px;
    justify-content: left;
    margin-bottom: 24px;
  }
`;

export const ActionButtonConteiner = styled.section`
  display: flex;

  @media (min-width: 1280px){
    justify-content: center;
    align-items: center;
    margin-top: auto;
    margin-bottom: 33px;
  }

  @media (max-width: 1280px){
    justify-content: center;
    align-items: center;
    margin-top: auto;
    margin-bottom: 33px;
  }

  @media (max-width: 768px){
    justify-content: left;
    margin-bottom: 10px;
  }

  @media (max-width: 460px){
    justify-content: left;
    margin-bottom: 10px;
  }
`;
