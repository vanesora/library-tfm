import React, { useState } from "react";
import { IMoleculeInputProps, MoleculeInput } from "../../molecules/Input";
import { AtomButtonDefault } from "../../atoms/Buttons/Default";

interface IFormProps {
  /** Array properties Inputs */
  inputs: IMoleculeInputProps[];
  /** Colors by form */
  theme: "light" | "dark";
  /** Submit form */
  onSubmit: (e?: any) => void;
  /** Text of button */
  buttonText: string;
  /** disabled form */
  disabled: boolean;
}

export const OrganismForm = ({
  inputs,
  theme,
  onSubmit,
  buttonText,
  disabled
}: IFormProps) => {
  const [formData, setFormData] = useState<{ [key: string]: any }>({});
  const [errors, setErrors] = useState<{ [key: string]: any }>({});

  const handleChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleBlur = (name: any, error: any) => {
    setErrors({
      ...errors,
      [name]: error,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const hasErrors = Object.values(errors).some((error) => error);

    if (hasErrors) {
      console.log("Hay errores en el formulario. Corrige los campos.");
    } else {
      console.log("Formulario enviado con éxito:", formData);
      if (onSubmit) {
        onSubmit(formData);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {inputs.map((input, index) => (
        <MoleculeInput
          name={input.name}
          key={index}
          label={input.label}
          helperText={errors[input.name]? input.helperText : ''}
          type={input.type}
          value={formData[input.name] || ""}
          theme={theme}
          disabled={input.disabled}
          placeholder={input.placeholder}
          readOnly={input.readOnly}
          required={input.required}
          onChange={(value) => handleChange(input.name, value)}
          errorCallback={(error) => handleBlur(input.name, error)}
          regex={input.regex}
        />
      ))}
      <AtomButtonDefault disabled={disabled} text={buttonText} />
    </form>
  );
};
