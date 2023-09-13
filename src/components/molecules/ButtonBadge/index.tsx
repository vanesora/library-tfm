import React, { useMemo, useState, useEffect } from "react";
import { AtomIcon } from "react/atoms/Icon";
import { AtomBody } from "react/atoms/Typography/Body";
import { ButtonBadgeContainer, SealImageContainer, Separator } from "./styles";
import { keysTheme } from "data/dataMx";
import { AtomImage } from "react/atoms/Image";
import cheersDefault from "assets/images/cheers_2.png";

export interface IButtonBadgeProps {
  /** Text on the badge */
  badgeText: string;
  /** This is to manage the status of the badge */
  badgeStatus: "completed" | "inProgress" | "locked";
  /** the png file that is received to show in front of the svg seal */
  image: string;
  /** bg color of the svg seal */
  bgColor?: keysTheme;
  /** alt text for the image */
  altTextImg?: string;
  /** receives a function to excecute when click the badge */
  onClick?: () => void;
}

const status: any = {
  completed: {
    icon: "check",
    color: "quaternary500",
  },
  locked: {
    icon: "https",
    color: "neutral400",
  },
  inProgress: {
    icon: "",
    color: "",
  },
};

export const MoleculeButtonBadge = ({
  badgeText,
  badgeStatus,
  bgColor = "secondary",
  image = cheersDefault,
  altTextImg = "badge",
  onClick,
  ...props
}: IButtonBadgeProps) => {
  const [width, setWidth] = useState<number>(0);
  const handleResize = () => setWidth(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  useEffect(() => {
    handleResize();
  }, []);

  const getCurrentStatus: any = useMemo(() => {
    const theStatus = Object.keys(status)
      .filter((key) => badgeStatus === key)
      .reduce((obj: any, key: any) => {
        return {
          ...obj,
          [key]: status[key],
        };
      }, {});

    for (const stat in theStatus) {
      return theStatus[stat];
    }
  }, [badgeStatus]);

  return (
    <ButtonBadgeContainer onClick={onClick} {...props}>
      <AtomIcon
        icon={getCurrentStatus.icon}
        size={width <= 640 ? 10 : 15}
        color={getCurrentStatus.color}
      />
      <Separator />
      <SealImageContainer>
        <AtomImage src={image} alt={altTextImg} />
        <AtomIcon
          icon={"badges_seal"}
          size={width <= 640 ? 66 : 84}
          color={badgeStatus === "locked" ? "neutral400" : bgColor}
        />
      </SealImageContainer>
      <AtomBody
        size={width <= 640 ? "xsmall" : "medium"}
        text={badgeText}
        weight="bold"
        color={badgeStatus === "locked" ? "neutral400" : "neutral600"}
        styles={{
          maxWidth: width <= 640 ? 66 : 84,
          wordBreak: "break-word",
          height: 70,
        }}
      />
    </ButtonBadgeContainer>
  );
};
