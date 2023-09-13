import React, {
  FunctionComponent,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  ButtonColor,
  ButtoniconTypeDesign,
  ButtonTypeDesign,
  CustomColor,
  IconAlign,
} from "react/atoms/Buttons/ButtonProps";
import { AtomButtonOutline } from "react/atoms/Buttons/Outline";
import { ContainerButton, StyledButtonGroup } from "./styles";
import { AtomButtonDefault } from "react/atoms/Buttons/Default";
import { AtomButtonGhost } from "react/atoms/Buttons/Ghost";
import { AtomButtonIcon } from "react/atoms/Buttons/Icon";
import { ThemeContext } from "context/context";

export interface IButtonGroupProps {
  /* data that will populate the button group */
  data: IItemProps[];
  /* indicates how to display the buttons */
  direction: "column" | "row";
  /* indicates if the buttons will work normal or as toggle buttons */
  groupStyle?: "normal" | "toggle";
  /* button width */
  width?: string;
}
interface IItemProps {
  /* unique value of each element */
  id: number;
  /* Label that the button displays */
  text: string;
  /* wheter is the button disabled or not */
  disabled: boolean;
  /* function that will trigger on pressing the button, if toggle, button will be marked as selected */
  onClick?: (e?: any) => void;
  /* color of the button, if toggle primary is defaulted */
  color: ButtonColor;
  /* type of button, if toggle, outline is defaulted */
  type: ButtonTypeDesign;
  /* if color is selected as custom, then we apply other color to button. If toggle, primary is defaulted */
  customColor?: CustomColor;
  /* icon that will show the button */
  icon?: string;
  /* disposition of the icon on the button */
  iconAlign?: IconAlign;
  /* type of the icon */
  typeButtonIcon?: ButtoniconTypeDesign;
  /* indicates in the case of group buttons if the will work normal or as toggle buttons */
  groupStyle?: "normal" | "toggle";
  /* in case that the buttons is used as toggle, indicate which button is selected */
  selected?: boolean;
  /* button width */
  width?: string;
}

const Button = ({
  disabled,
  onClick,
  color,
  text,
  type,
  customColor,
  icon,
  iconAlign,
  typeButtonIcon,
  selected = false,
  groupStyle = "normal",
  width,
}: IItemProps) => {
  switch (type) {
    case "outline":
      if (groupStyle == "normal") {
        return (
          <AtomButtonOutline
            disabled={disabled}
            onClick={onClick}
            color={color}
            text={text}
            customColor={customColor}
            width={width}
            type={"button"}
          />
        );
      } else {
        return (
          <AtomButtonOutline
            disabled={disabled}
            onClick={onClick}
            color={"primary"}
            text={text}
            width={width}
            selected={selected}
            type={"button"}
            className={
              groupStyle === "toggle"
                ? selected === true
                  ? "toggled-button_selected"
                  : "toggled-button"
                : ""
            }
          />
        );
      }
    case "default":
      return (
        <AtomButtonDefault
          disabled={disabled}
          onClick={onClick}
          color={color}
          text={text}
          customColor={customColor}
          type={"button"}
          width={width}
        />
      );
    case "ghost":
      return (
        <AtomButtonGhost
          disabled={disabled}
          onClick={onClick}
          color={color}
          text={text}
          customColor={customColor}
          type={"button"}
          width={width}
        />
      );
    case "icon":
      return (
        <AtomButtonIcon
          disabled={disabled}
          onClick={onClick}
          color={color}
          text={text}
          customColor={customColor}
          type={"button"}
          icon={icon ?? ""}
          iconAlign={iconAlign}
          width={width}
          typeButtonIcon={typeButtonIcon ?? "default"}
        />
      );
  }
};

export const MoleculeButtonGroup: FunctionComponent<IButtonGroupProps> = ({
  data,
  direction = "row",
  groupStyle = "normal",
  width = "auto",
}) => {
  const { palette } = useContext(ThemeContext);

  const [array, setArray] = useState(
    data.map((item) => {
      return {
        ...item,
        select: false,
      };
    })
  );
  useEffect(() => {
    setArray(
      data.map((item) => {
        return {
          ...item,
          select: false,
        };
      })
    );
  }, [data]);

  const handleToggle = (item: any) => {
    data.forEach((button) => {
      button.selected = false;
    });
    const [selectedButton] = data.filter((button) => button.id === item.id);
    selectedButton.selected = true;
    setArray(
      data.map((item) => {
        return {
          ...item,
          select: false,
        };
      })
    );
    item.onClick(item);
  };

  return (
    <StyledButtonGroup direction={direction} id={`button-group`}>
      {array.map((item: IItemProps, index) => {
        return (
          <ContainerButton key={`${item.text}${index}`} colorPalette={palette}>
            <Button
              id={item.id}
              disabled={item.disabled}
              onClick={
                groupStyle === "toggle"
                  ? () => handleToggle(item)
                  : item.onClick
              }
              color={item.color}
              text={item.text}
              customColor={item.customColor}
              type={item.type}
              icon={item.icon ?? ""}
              iconAlign={item.iconAlign}
              typeButtonIcon={item.typeButtonIcon}
              groupStyle={groupStyle}
              selected={item.selected}
              width={width}
            />
          </ContainerButton>
        );
      })}
    </StyledButtonGroup>
  );
};
