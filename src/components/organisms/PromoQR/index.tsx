import React from "react";
import { AtomCardContainer } from "react/atoms/CardContainer";
import { AtomImage } from "react/atoms/Image";
import { AtomLink } from "react/atoms/Link";
import { AtomBody } from "react/atoms/Typography/Body";
import { AtomHeadline } from "react/atoms/Typography/Headline";
import { IPromoQRProps } from "./index.interfaces";
import { CardBody } from "./styles";

export const OrganismPromoQR = ({
  title,
  data,
  textLink,
  urlLink,
  width = "396px",
  height = "414px",
  children,
}: IPromoQRProps) => {
  return (
    <AtomCardContainer
      padding="10px"
      height={height}
      width={width}
      shadowSize="large"
    >
      <CardBody>
        {children}
        <AtomBody
          text={title}
          size="xlarge"
          align="center"
          weight="regular"
          styles={{ width: "100%" }}
          color="neutral600"
        />
        <AtomImage
          alt={`Promo QR Code ${data.code}`}
          src={data.image}
          imgWidth="60%"
          imgHeight="60%"
        />
        <AtomHeadline
          styles={{ marginTop: "0px", marginBottom: "10px" }}
          text={`[ ${data.code.split("").join(" ")} ]`}
          size="medium"
          align="center"
          weight="regular"
          color="neutral600"
        />
        <AtomLink
          text={textLink}
          typeIcon="Right"
          url={urlLink}
          color="primary"
          nameIconRight="pin"
        />
      </CardBody>
    </AtomCardContainer>
  );
};
