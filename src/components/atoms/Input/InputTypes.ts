export type IInputType =
  | "Text"
  | "Phone"
  | "Password"
  | "Number"
  | "Email"
  | "Date";

export type IInputDateSort =
  | "DD-MM-YYYY"
  | "MM-DD-YYYY"
  | "YYYY-DD-MM"
  | "YYYY-MM-DD";

  export interface IInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Enable or disable the input */
  disabled?: boolean;
  /** Text when nothing is written */
  placeholder?: string;
  /** Unable to change value */
  readOnly?: boolean;
  /** Regular expression to test value */
  regex?: string;
  /** Flag to know if the value is required */
  required?: boolean;
  /** Action of changing input value */
  onChange?: (value: any) => void;
  /** Action to submit a error */
  errorCallback?: (type: ErrorsInput) => void;
  /** Must be true when a custom validation fails   */
  hasCustomValidationError?: boolean;
}

export type ErrorsInput =
  | "min"
  | "max"
  | "minLength"
  | "maxLength"
  | "regExp"
  | "required"
  | "invalidDate"
  | null;

