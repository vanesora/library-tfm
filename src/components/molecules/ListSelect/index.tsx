import React, {
  FunctionComponent,
  useContext,
  useEffect,
  useState,
} from "react";
import { AtomButtonMenu } from "../../atoms/Buttons/Menu";
import { AtomButtonSubMenu } from "../../atoms/Buttons/SubMenu";
import { ContainerButton, StyledButtonGroup } from "./styles";

export interface IButtonGroupProps {
  /* data that will populate the button group */
  data: IItemProps[];
  /* indicates how to display the buttons */
  direction: "column" | "row";
  /* button width */
  width?: string;
  initialSelected?: number;
  onButtonSelect?: (e?: any) => void;
}
export interface IItemProps {
  /* unique value of each element */
  id: number;
  /* Label that the button displays */
  text: string;
  /* where is the button disabled or not */
  disabled: boolean;
  /* function that will trigger on pressing the button, button will be marked as selected */
  onClick: (e?: any) => void;
  /* Icon Name, if button have Icon */
  icon?: string;
  /* Indicate which button is selected */
  selected?: boolean;
  /* Indicate which button is selected */
  type?: "menu" | "submenu";
  /* If button is type submenu */
  width?: string;
}

const Button = ({
  disabled,
  onClick,
  text,
  type = "menu",
  icon,
  selected = false,
  width,
}: IItemProps) => {
  switch (type) {
    case "menu":
      return (
        <AtomButtonMenu
          disabled={disabled}
          onClick={onClick}
          text={text}
          type={"button"}
          icon={icon}
          selected={selected}
        />
      );
    case "submenu":
      return (
        <AtomButtonSubMenu
          disabled={disabled}
          onClick={onClick}
          size={"small"}
          text={text}
          type={"button"}
          width={width}
          selected={selected}
        />
      );
  }
};

export const MoleculeListSelect: FunctionComponent<IButtonGroupProps> = ({
  data,
  direction = "row",
  width = "auto",
  initialSelected,
  onButtonSelect,
}) => {
  const [selectedButton, setSelectedButton] = useState(initialSelected);

  useEffect(() => {
    if (onButtonSelect) {
      onButtonSelect(selectedButton);
    }
  }, [selectedButton, onButtonSelect]);

  const handleButtonClick = (index: any) => {
    setSelectedButton(index);
    data[index].onClick();
  };

  return (
    <StyledButtonGroup direction={direction} id={`button-group`}>
      {data.map((item: IItemProps, index) => {
        return (
          <ContainerButton key={`${item.text}${index}`}>
            <Button
              id={item.id}
              disabled={item.disabled}
              selected={selectedButton === index}
              onClick={() => handleButtonClick(index)}
              text={item.text}
              type={item.type}
              icon={item.icon ?? ""}
              width={width}
            />
          </ContainerButton>
        );
      })}
    </StyledButtonGroup>
  );
};
