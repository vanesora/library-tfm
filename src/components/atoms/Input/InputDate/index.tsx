import React, { FunctionComponent, useEffect, useMemo, useState } from "react";
import { AtomSelect } from "react/atoms/Select";
import moment from "moment";
import { InputDateContainer, SelectorContainer } from "./styles";
import { CSSObject } from "styled-components";
import { IInputDateSort } from "../InputTypes";
import { ErrorsInput } from "interfaces/index";

interface IInputProps {
  width: string;
  items: string[];
  value: string;
  onChangeValue: (value: string) => void;
  dataTestId?: string;
}

export interface IInputDateProps {
  /** Initial date */
  date?: string;
  /** Minimum year in select list */
  minYear?: string;
  /** Maximum year in select list */
  maxYear?: string;
  /** Width input */
  width?: string;
  /** Enable or disable input */
  disabled?: boolean;
  /** If input is required */
  required?: boolean;
  /** If is possible change value */
  readOnly?: boolean;
  /** Css proprieties selects */
  styles?: CSSObject;
  /** Order to selects */
  sort?: IInputDateSort;
  /** Change function */
  onChange?: (value: any) => void;
  /** Action to submit a error */
  errorCallback?: (type: ErrorsInput) => void;
  /** Must be true when a custom validation fails   */
  hasCustomValidationError?: boolean;
}

const createListDay = (
  year: string,
  month: string,
  date: string,
  sort: IInputDateSort
) => {
  const _year = !isNaN(Number(year)) ? year : moment(date, sort).format("YYYY");
  const _month = !isNaN(Number(month))
    ? month
    : date
    ? moment(date, sort).format("MM")
    : "01";
  const days = moment(`${_year}-${_month}`, "YYYY-MM").daysInMonth();
  const list: { label: string; value: string; key: number }[] = [];
  for (let index = 1; index <= days; index++) {
    list.push({
      label: index < 10 ? `0${index}` : index.toString(),
      value: index < 10 ? `0${index}` : index.toString(),
      key: index,
    });
  }
  return list;
};

const createListYear = (minYear: string, maxYear: string) => {
  const list: { label: string; value: string; key: number }[] = [];
  for (let index = parseInt(minYear); index <= parseInt(maxYear); index++) {
    list.push({
      label: index.toString(),
      value: index.toString(),
      key: index,
    });
  }
  return list;
};

const createListMonth = () => {
  const list: { label: string; value: string; key: number }[] = [];
  for (let index = 1; index <= 12; index++) {
    list.push({
      label: index < 10 ? `0${index}` : index.toString(),
      value: index < 10 ? `0${index}` : index.toString(),
      key: index,
    });
  }
  return list;
};

export const AtomInputDate: FunctionComponent<IInputDateProps> = ({
  date = "",
  width,
  required = false,
  readOnly = false,
  disabled = false,
  styles,
  minYear = moment().subtract(100, "y").format("YYYY"),
  maxYear = moment().add(100, "y").format("YYYY"),
  sort = "MM-DD-YYYY",
  onChange = () => {},
  errorCallback = () => {},
  hasCustomValidationError = false,
}: IInputDateProps) => {
  const [year, setYear] = useState<string>("YYYY");
  const [month, setMonth] = useState<string>("MM");
  const [day, setDay] = useState<string>("DD");
  const [arrayOrder, setArrayOrder] = useState<IInputProps[]>([]);
  const [hasError, setHasError] = useState<boolean>(false);

  useEffect(() => {
    validateInput();

    if (!isNaN(Number(year)) && !isNaN(Number(month)) && !isNaN(Number(day))) {
      const newDate = moment(`${year}${month}${day}`, "YYYYMMDD").format(sort);
      validateInput(newDate);

      onChange(newDate);
    }
  }, [year, month, day]);

  const labelYearList: string[] = useMemo(() => {
    return createListYear(minYear, maxYear)
      .map((year) => year.label)
      .reverse();
  }, [minYear, maxYear]);

  const labelMonthList: string[] = useMemo(() => {
    return createListMonth().map((month) => month.label);
  }, []);

  const labelDayList: string[] = useMemo(() => {
    return createListDay(year, month, date, sort).map((day) => day.label);
  }, [year, month, date]);

  const validateInput = (date?: string): void => {
    setHasError(false);
    if (
      !isNaN(Number(year)) &&
      !isNaN(Number(month)) &&
      !isNaN(Number(day)) &&
      !moment(date, sort).isValid()
    ) {
      setHasError(true);
      errorCallback("invalidDate");
    }
    if (
      required &&
      (isNaN(Number(year)) || isNaN(Number(month)) || isNaN(Number(day)))
    ) {
      setHasError(true);
      errorCallback("required");
    }
  };

  const createListSelects = () => {
    const listOrder: IInputProps[] = [];
    const itemDay: IInputProps = {
      dataTestId: "select-day",
      width: "100%",
      items: labelDayList,
      value: day,
      onChangeValue: (day: string) => setDay(day),
    };
    const itemMonth: IInputProps = {
      dataTestId: "select-month",
      width: "100%",
      items: labelMonthList,
      value: month,
      onChangeValue: (month: string) => setMonth(month),
    };
    const itemYear: IInputProps = {
      dataTestId: "select-year",
      width: "100%",
      items: labelYearList,
      value: year,
      onChangeValue: (year: string) => setYear(year),
    };

    switch (sort) {
      case "DD-MM-YYYY":
        listOrder.push(itemDay);
        listOrder.push(itemMonth);
        listOrder.push(itemYear);
        break;

      case "MM-DD-YYYY":
        listOrder.push(itemMonth);
        listOrder.push(itemDay);
        listOrder.push(itemYear);
        break;

      case "YYYY-DD-MM":
        listOrder.push(itemYear);
        listOrder.push(itemDay);
        listOrder.push(itemMonth);
        break;

      case "YYYY-MM-DD":
        listOrder.push(itemYear);
        listOrder.push(itemMonth);
        listOrder.push(itemDay);
        break;
    }
    setArrayOrder(listOrder);
  };

  useEffect(() => {
    createListSelects();
  }, [labelYearList, labelMonthList, labelDayList]);

  useEffect(() => {
    const currDate = moment(date, sort);
    const monthConst = currDate.format("MM");
    const dayConst = currDate.format("DD");
    const yearConst = currDate.format("YYYY");
    if (
      labelMonthList.includes(monthConst.toString()) &&
      labelYearList.includes(yearConst.toString()) &&
      labelDayList.includes(dayConst.toString())
    ) {
      setMonth(monthConst);
      setYear(yearConst);
      setDay(dayConst);

      if (
        !isNaN(Number(yearConst)) &&
        !isNaN(Number(monthConst)) &&
        !isNaN(Number(dayConst))
      ) {
        const newDateConst = moment(
          `${yearConst}${monthConst}${dayConst}`,
          "YYYYMMDD"
        ).format(sort);
        onChange(newDateConst);
        createListSelects();
      }
    } else {
      setMonth("MM");
      setYear("YYYY");
      setDay("DD");
      createListSelects();
    }
  }, [date, sort]);

  return (
    <InputDateContainer width={width}>
      {arrayOrder.map((item: IInputProps, index: number) => {
        return (
          <SelectorContainer data-testId={item.dataTestId} key={index}>
            <AtomSelect
              width={item.width}
              items={item.items}
              value={item.value}
              onChangeValue={item.onChangeValue}
              disabled={disabled}
              required={required}
              readOnly={readOnly}
              styles={styles}
              hasCustomValidationError={hasError || hasCustomValidationError}
            />
          </SelectorContainer>
        );
      })}
    </InputDateContainer>
  );
};
