import React, { useState, useEffect } from "react";
import { AtomCardContainer } from "react/atoms/CardContainer";
import { AtomIcon } from "react/atoms/Icon";
import { AtomHeadline } from "react/atoms/Typography/Headline";
import { AtomBody } from "react/atoms/Typography/Body";
import { AtomButtonDefault } from "react/atoms/Buttons/Default";
import { AtomButtonGhost } from "react/atoms/Buttons/Ghost";
import {
  ReadReferralContainer,
  ReadReferralInputContainer,
  ButtonsContainer,
} from "./styles";
import { AtomInputText } from "react/atoms/Input/InputText";

export interface IReadReferralProps {
  handleClick: (code: string) => void;
  skipFunction: (e: any) => void;
  headline?: string;
  text?: string;
  referredCode?: string;
}

export const OrganismReadReferralCode = ({
  headline = "Invited by a friend?",
  text = "Enter their code for 250 points. If not “Skip” to continue. ",
  referredCode = "",
  handleClick,
  skipFunction,
}: IReadReferralProps) => {
  const [code, setCode] = useState<string>(referredCode);

  useEffect(() => {
    setCode(referredCode);
  }, [referredCode]);
  return (
    <ReadReferralContainer>
      <AtomCardContainer
        height="auto"
        width="100%"
        padding="45px 31px 27px"
        justifyContent="space-around"
        alignItems="center"
      >
        <AtomIcon icon={"earn_invite"} size={45} />
        <AtomHeadline
          size={"large"}
          text={headline}
          color={"primary400"}
          weight="regular"
          styles={{ margin: "20px 0", fontWeight: 500, fontSize: "24px" }}
        />
        <AtomBody
          size={"large"}
          weight="regular"
          color={"neutral700"}
          text={text}
          styles={{ marginBottom: "20px", fontSize: "18px" }}
        />
        <ReadReferralInputContainer>
          <AtomInputText
            value={code}
            onChange={(value) => setCode(value)}
            placeholder="Code (XY-0000)"
          />
        </ReadReferralInputContainer>
        <ButtonsContainer>
          <AtomButtonGhost
            id="skip"
            disabled={false}
            color={"primary"}
            text={"Skip"}
            type={"button"}
            width="110px"
            size="medium"
            onClick={(e) => skipFunction(e)}
          />
          <AtomButtonDefault
            id="redeem"
            disabled={false}
            color={"primary"}
            text={"Redeem"}
            type={"button"}
            width="110px"
            size="medium"
            onClick={() => handleClick(code)}
          />
        </ButtonsContainer>
      </AtomCardContainer>
    </ReadReferralContainer>
  );
};
