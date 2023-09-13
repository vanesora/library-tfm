import React, { useState, useEffect } from "react";
import { AtomCardContainer } from "react/atoms/CardContainer";
import { AtomIcon } from "react/atoms/Icon";
import { AtomHeadline } from "react/atoms/Typography/Headline";
import { AtomBody } from "react/atoms/Typography/Body";
import { AtomButtonDefault } from "react/atoms/Buttons/Default";
import {
  PromoCodeButtonContainer,
  PromoCodeIconContainer,
  PromoCodeContainer,
  PromoCodeError,
} from "./styles";
import { AtomInputText } from "react/atoms/Input/InputText";

export interface IPromoCodeProps {
  /** Icon at the top */
  iconName?: string;
  /** Principal text */
  headline: string;
  /** Subtitle text */
  text: string;
  /** */
  handleClick: (text: string) => void;
  /** input value */
  value?: string;
  /** The regex for input */
  regExp?: string;
  /** Error message when regExp is not true */
  errorMessageText: string;
  /** Height of the component, when a value is assigned the default behaviour is removed */
  height?: string;
  /** Width of the component, when a value is assigned the default behaviour is removed */
  width?: string;
}

export const OrganismPromoCode = ({
  iconName = "earn_promocode",
  headline,
  text,
  handleClick,
  value = "",
  regExp = "^[A-Za-z0-9]{10,16}$",
  errorMessageText,
  height,
  width,
}: IPromoCodeProps) => {
  const [inputValue, setInputValue] = useState<string>(value);
  const [errorMessage, setErrorMessage] = useState<boolean>(false);

  const promoCodeValidation = (code: string) => {
    const strRegExp = new RegExp(regExp);
    const testRegex = strRegExp.test(code);
    code.length === 0 ? setErrorMessage(false) : setErrorMessage(!testRegex);
    setInputValue(code);
  };

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  return (
    <PromoCodeContainer>
      <AtomCardContainer
        height={height || "100%"}
        width={width || "100%"}
        padding="31px"
        justifyContent="center"
        alignItems="center"
      >
        <PromoCodeIconContainer>
          <AtomIcon icon={iconName} size={55} />
        </PromoCodeIconContainer>
        <AtomHeadline
          size={"large"}
          text={headline}
          color={"primary400"}
          weight="light"
          styles={{ margin: "5% auto", textAlign: "center" }}
        />
        <AtomBody
          size={"large"}
          weight="regular"
          color={"neutral700"}
          text={text}
          styles={{ textAlign: "center", marginBottom: "10%" }}
        />
        <AtomInputText
          placeholder="Code (XY-0000)"
          onChange={(code: string) => promoCodeValidation(code)}
          value={inputValue}
        />
        <PromoCodeError>
          <AtomBody
            size={"xsmall"}
            weight="bold"
            color={"secondary"}
            text={errorMessage && errorMessageText ? errorMessageText : " "}
            align="center"
          />
        </PromoCodeError>
        <PromoCodeButtonContainer>
          <AtomButtonDefault
            disabled={errorMessage}
            color={"primary"}
            text={"Redeem"}
            type={"button"}
            width="100%"
            size="medium"
            onClick={() => handleClick(inputValue)}
          />
        </PromoCodeButtonContainer>
      </AtomCardContainer>
    </PromoCodeContainer>
  );
};
