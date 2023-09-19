import { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { OrganismForm } from "../../components/organisms/DynamicForm";
const meta: Meta = {
  title: "React/organisms/Form",
  component: OrganismForm,
  argTypes: {
    onClick: {
      table: {
        disable: true,
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Form: Story = {
  args: {
    inputs: [
      {
        label: "Nombre",
        type: "text",
        value: "Texto 1",
        required: true,
        name: "name",
        readOnly: false,
        onChange: action("Event change"),
        errorCallback: action("Error"),
        helperText: 'Comprueba que el campo esté correcto'
      },
      {
        label: "Email",
        type: "email",
        value: "",
        required: true,
        name: "email",
        readOnly: false,
        onChange: action("Event change"),
        errorCallback: action("Error"),
        helperText: 'Comprueba que el campo esté correcto'
      },
      {
        label: "Contraseña",
        type: "password",
        value: "sdasdada",
        required: true,
        name: "password",
        readOnly: false,
        onChange: action("Event change"),
        errorCallback: action("Error"),
        helperText: 'Comprueba que el campo esté correcto'
      },
      {
        label: "Número",
        type: "number",
        value: 0,
        required: false,
        name: "number",
        readOnly: false,
        onChange: action("Event change"),
        errorCallback: action("Error"),
        helperText: 'Comprueba que el campo esté correcto'
      },
    ],
    theme: 'light',
    onSubmit: action("Event change")
  },
};
