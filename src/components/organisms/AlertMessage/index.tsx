import React from "react";
import { Container, WapperText, WrapperBtn } from "./styles";
import { AtomCardContainer } from "react/atoms/CardContainer";
import { AtomIcon } from "react/atoms/Icon";
import { AtomHeadline } from "react/atoms/Typography/Headline";
import { AtomBody } from "react/atoms/Typography/Body";
import { AtomButtonGhost } from "react/atoms/Buttons/Ghost";
import { AtomButtonDefault } from "react/atoms/Buttons/Default";
import { keysTheme, mxSetup, theme } from "data/dataMx";
import { ButtonColor, ButtonSize } from "react/atoms/Buttons/ButtonProps";

export interface IAlertMessageProps {
  /** Message of Alert */
  message?: string;
  /** Function for event onclick first button */
  onClickFirstBtn: (e?: any) => void;
  /** Function for event onclick second button */
  onClickSecondBtn?: (e?: any) => void;
  /** Text for first button */
  textFirstBtn: string;
  /** Text for second button */
  textSecondBtn?: string;
  /** Alert title, you can insert line breaks using string with backquote by entering enter key */
  title: string;
  /** Alert type */
  type: "success" | "error" | "info" | "custom";
  /** Enable second button ghost */
  enableSecundaryBtn?: boolean;
  /** Custom color if the type is custom */
  customColor?: keysTheme;
  /** Custom icon if the type is custom */
  customIcon?: string;
  /** Custom color of button if the type is custom */
  customColorBtn?: keysTheme;
  /** Size buttons */
  sizeButtons?: ButtonSize;
  /** Color behind alertMessage */
  backgroundColor?: string;
  /** Width of alertMessage */
  width?: string;
  /** Height of alertMessage */
  height?: string;
  /** Parent InnerWidth */
  innerWidthParent?: number;
}

interface IStyles {
  cardHeight: string;
  cardWidth: string;
  color: keysTheme;
  icon: string;
  btnColor: keysTheme;
}

export const OrganismAlertMessage = ({
  customColor = "neutral300",
  customIcon = "",
  customColorBtn = "primary",
  enableSecundaryBtn = false,
  message = "",
  onClickFirstBtn,
  onClickSecondBtn,
  sizeButtons,
  textFirstBtn,
  textSecondBtn = "",
  title,
  type,
  backgroundColor = theme.transparent,
  width = "",
  height = "",
  innerWidthParent = window.innerWidth,
}: IAlertMessageProps) => {
  const screenWidth: number = innerWidthParent;
  const queryDesktop: number = parseInt(
    `${mxSetup.mediaQuery.desktop.min}`.replace("px", "")
  );

  const styles = (): IStyles => {
    switch (type) {
      case "success":
        return {
          color: "quaternary",
          icon: "check",
          cardWidth: width || (screenWidth < queryDesktop ? "303px" : "600px"),
          cardHeight:
            height || (screenWidth < queryDesktop ? "318px" : "506px"),
          btnColor: "primary",
        };
      case "error":
        return {
          color: "secondary",
          icon: "cancel",
          cardWidth: width || (screenWidth < queryDesktop ? "303px" : "600px"),
          cardHeight:
            height || (screenWidth < queryDesktop ? "294px" : "506px"),
          btnColor: "secondary",
        };
      case "info":
        return {
          color: "neutral300",
          icon: "alert-info",
          cardWidth: width || (screenWidth < queryDesktop ? "303px" : "600px"),
          cardHeight:
            height || (screenWidth < queryDesktop ? "218px" : "506px"),
          btnColor: "primary",
        };
      default:
        return {
          color: customColor,
          icon: customIcon,
          cardWidth: width || (screenWidth < queryDesktop ? "303px" : "600px"),
          cardHeight:
            height || (screenWidth < queryDesktop ? "318px" : "506px"),
          btnColor: customColorBtn,
        };
    }
  };

  return (
    <Container background={backgroundColor}>
      <AtomCardContainer
        alignItems="center"
        bgColor={"neutral100"}
        height={styles().cardHeight}
        justifyContent={screenWidth < queryDesktop ? "center" : "space-around"}
        padding="30px 20px"
        width={styles().cardWidth}
      >
        <AtomIcon icon={styles().icon} size={75} color={styles().color} />
        <WapperText>
          <AtomHeadline
            color={type === "info" ? "neutral600" : "neutral700"}
            size="medium"
            styles={{ margin: "20px 0 10px 0" }}
            text={title}
            weight="bold"
          />
          {type !== "info" && message.length ? (
            <AtomBody text={message} size="large" color={"neutral600"} />
          ) : null}
        </WapperText>
        <WrapperBtn
          margin={
            screenWidth < queryDesktop
              ? type === "info"
                ? "20px"
                : "40px"
              : "0"
          }
        >
          {textSecondBtn.length && enableSecundaryBtn ? (
            <AtomButtonGhost
              color={styles().btnColor as ButtonColor}
              disabled={false}
              onClick={onClickSecondBtn}
              size={sizeButtons}
              text={textSecondBtn}
              type="button"
            />
          ) : null}
          <AtomButtonDefault
            color={styles().btnColor as ButtonColor}
            disabled={false}
            onClick={onClickFirstBtn}
            size={sizeButtons}
            text={textFirstBtn}
            type="button"
          />
        </WrapperBtn>
      </AtomCardContainer>
    </Container>
  );
};
