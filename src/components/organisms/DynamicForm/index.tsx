import React, { useState } from "react";
import { IMoleculeInputProps, MoleculeInput } from "../../molecules/Input";

interface IFormProps {
  inputs: IMoleculeInputProps[];
  theme: "light" | "dark";
  onSubmit: (e?: any)=>void;
}

export const OrganismForm = ({ inputs, theme, onSubmit }: IFormProps) => {
  const [formData, setFormData] = useState<{ [key: string]: any }>({});
  const [errors, setErrors] = useState({});

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
      console.log('Hay errores en el formulario. Corrige los campos.');
    } else {
      console.log('Formulario enviado con éxito:', formData);
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
          helperText={input.helperText}
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
      <button type="submit">Submit</button>
    </form>
  );
};
