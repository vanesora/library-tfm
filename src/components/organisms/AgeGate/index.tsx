import React from "react";
import { AtomHeadline } from "react/atoms/Typography/Headline/index";
import {
  AtomInputDate,
  IInputDateProps,
} from "react/atoms/Input/InputDate/index";
import { AtomButtonDefault } from "react/atoms/Buttons/Default";
import { AgeGateContainer, ButtonContainer } from "./styles";
import { ITypographyProps } from "react/atoms/Typography/TypographyProps";
import moment from "moment";

export interface IAgeGateProps {
  /** This will be called if the entered date is does not pass age vaidation */
  onError: () => void;
  /** This will be called if the entered date is does pass age vaidation */
  onSuccess: () => void;
  /** Minimum age to enter the site */
  minAge?: number;
  /** Informative text over the date */
  title?: string;
  /** Date to be shown in the InputDate. Format MM-DD-YYYY */
  initialDate?: string;
  /** Properties of the title if ir need to be changed */
  titleProps?: Omit<Partial<ITypographyProps>, "text">;
  /** Properties of the Input Date Atom */
  inputDateProps?: Omit<Partial<IInputDateProps>, "date" | "onChanged">;
}

export const OrganismAgeGate = ({
  minAge = 18,
  onSuccess,
  onError,
  title = "",
  titleProps = {},
  initialDate,
  inputDateProps = {},
}: IAgeGateProps) => {
  const [selectedDate, setSelectedDate] = React.useState(
    initialDate || moment().format("MM-DD-YYYY")
  );

  const checkAge = () => {
    const userDate = moment(selectedDate, "MM-DD-YYYY");
    const today = moment();
    const diffInYears = today.diff(userDate, "years", true);
    diffInYears >= minAge ? onSuccess() : onError();
  };

  return (
    <AgeGateContainer>
      <AtomHeadline
        {...titleProps}
        text={title}
        size={titleProps.size || "medium"}
        weight={titleProps.weight || "regular"}
      />
      <AtomInputDate
        width="450px"
        date={initialDate || moment().format("MM-DD-YYYY")}
        onChange={(newDate) => setSelectedDate(newDate)}
        {...inputDateProps}
      />
      <ButtonContainer>
        <AtomButtonDefault
          text="Enter"
          color="primary"
          type="button"
          disabled={false}
          size="medium"
          width="165px"
          onClick={() => checkAge()}
        />
      </ButtonContainer>
    </AgeGateContainer>
  );
};
