import { ButtonColor, ButtonTypeDesign } from "react/atoms/Buttons/ButtonProps";

export interface IFilterProps {
  /* fillter type, at the moment, just checkboxes */
  type: string;
  /* text to display with the checkbox */
  text: string;
  /* value of the filter element */
  value: string;
  /*  */
  checked?: boolean;
  /* */
  link?: string;
  /* */
  active?: boolean;
}
export interface IToggleButtonsProps {
  /* id of the button */
  id: number;
  /* text of the button */
  text: string;
  /* if the buttons is selected or not */
  selected?: boolean;
}
export interface IToggleProps {
  /* title of toggle section */
  title: string;
  /* buttons of the toggle group */
  buttons: IToggleButtonsProps[];
}
export interface IButtonGroupToggleProps {
  /* title of toggle section */
  title: string;
  /* buttons of the toggle group transformed to items for button group */
  buttons: IItemProps[];
}

export interface IItemProps {
  id: number;
  disabled: boolean;
  onClick?: (e?: any) => void;
  color: ButtonColor;
  text: string;
  type: ButtonTypeDesign;
  selected?: boolean;
}
export interface IAccordionElementsProps {
  /* An ID to identify the element */
  id: number;
  /** Title of the element */
  accordionTitle: string;
  /** A value that will be used to create an object to filter/sort */
  value: string;
  /* if the accordion element is open or collapsed */
  open?: boolean;
  /* a list of filter elements to display as checkbox */
  filters: IFilterProps[];
  /* a list of toggle buttons to sort */
  sortButtons: IToggleProps[];
}
