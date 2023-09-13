import React from "react";
import { AtomIcon } from "react/atoms/Icon";
import { AtomLink } from "react/atoms/Link";
import { AtomBody } from "react/atoms/Typography/Body";
import { AtomSubtitle } from "react/atoms/Typography/Subtitle";
import { EmptyDataContainer, TextContainer } from "./styles";

export interface IEmptyDataProps {
  /** Name of the icon */
  iconName?: string;
  /** Title text that appears above the icon */
  titleText?: string;
  /** additional text */
  bodyText?: string;
  /** This is the link text */
  blueText?: string;
  /** This is the link url */
  linkBlueText?: string;
  /** Heirht emty Data */
  height?: string;
}

export const MoleculeEmptyData = ({
  iconName = "empty-beer",
  titleText = "No Data",
  bodyText = "",
  blueText = "",
  linkBlueText = "",
  height = "100vh",
  ...props
}: IEmptyDataProps) => {
  return (
    <EmptyDataContainer height={height} {...props}>
      <AtomIcon icon={iconName} size={160} />
      <TextContainer>
        <AtomSubtitle
          text={titleText}
          weight="medium"
          color={"neutral600"}
          styles={{ marginBottom: "10px", marginTop: 0 }}
          size="xsmall"
        />
        <AtomBody
          size="large"
          text={bodyText}
          weight="regular"
          color={"neutral600"}
          styles={{ width: "216px", margin: "0 auto" }}
        />
      </TextContainer>
      <AtomLink
        typeIcon={"noIcon"}
        text={blueText}
        color="primary"
        url={linkBlueText}
      />
    </EmptyDataContainer>
  );
};
