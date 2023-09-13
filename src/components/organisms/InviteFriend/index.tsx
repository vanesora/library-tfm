import React, { useState, useEffect } from "react";
import { DescriptionContainer, ShareContainer } from "./styles";
import { AtomCardContainer } from "react/atoms/CardContainer";
import { AtomBody } from "react/atoms/Typography/Body";
import { MoleculeInputCopy } from "react/molecules/InputCopy";
import { AtomButtonIcon } from "react/atoms/Buttons/Icon";
import { AtomIcon } from "react/atoms/Icon";

export interface IInviteProps {
  description?: string;
  iconDescription?: string;
  message?: string;
  link?: string;
  socialList?: string;
  customShareButtons?: JSX.Element;
}

export const OrganismsInviteFriend = ({
  description = "Earn points for inviting your friends to be part of the MyCooler experience.",
  message = "Message share",
  iconDescription = "earn_invite",
  link = "",
  socialList = "",
  customShareButtons,
}: IInviteProps) => {
  const [linkBase, setLinkBase] = useState<string>(link);
  const [socialListcomponent, setSocialListcomponent] = useState<string[]>([]);
  const [postContent, setPostContent] = useState<string>(message);

  const inviteFunction = (social: string) => {
    let url;
    switch (social) {
      case "whatsapp":
        url = "https://wa.me/?text=" + postContent + " " + linkBase;
        break;
      case "facebook":
        const facebookParameters = [];
        facebookParameters.push("u=" + encodeURI(linkBase));
        facebookParameters.push("quote=" + encodeURI(postContent));
        url =
          "https://www.facebook.com/sharer/sharer.php?" +
          facebookParameters.join("&");
        break;
      case "telegram":
        url = "https://t.me/share/url?url=" + linkBase + "&text=" + postContent;
        break;
      case "twitter":
        url =
          "https://twitter.com/intent/tweet?text=" +
          postContent +
          " " +
          linkBase;
        break;
    }

    window.open(url);
  };

  useEffect(() => {
    setLinkBase(link);
    setSocialListcomponent(socialList.replace(/\s/g, "").split(","));
  }, [link, socialList]);

  const Icons = socialListcomponent?.map((element) => {
    if (element !== "") {
      return (
        <AtomButtonIcon
          id="element"
          key={element}
          onClick={() => inviteFunction(element)}
          iconAlign="right"
          width="50px"
          icon={element}
          text=""
          disabled={false}
          color="primary"
          shape="circle"
          type="button"
          styles={{ margin: "5px" }}
        />
      );
    }
  });
  return (
    <AtomCardContainer padding="15px 25px" height="auto" width="100%">
      <DescriptionContainer>
        <AtomIcon icon={iconDescription} size={80} />
        <AtomBody
          styles={{ marginLeft: "15px" }}
          text={description}
          weight="regular"
          size="medium"
          align="left"
        />
      </DescriptionContainer>
      <MoleculeInputCopy value={linkBase} disabled={true} />
      {socialList.length > 0
        ? <ShareContainer>{Icons}</ShareContainer>
        : customShareButtons
      }
    </AtomCardContainer>
  );
};
