import { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { AtomIcon } from "../../components";
import { MoleculeInput } from "../../components/molecules/Input";

const meta: Meta = {
  title: "React/molecules/Input",
  component: MoleculeInput,
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
export const InputMolecule: Story = {
  args: {
    disabled: false,
    placeholder: "Email",
    readOnly: false,
    required: false,
    value: "sd",
    onChange: action("Event change"),
    errorCallback: action("Error"),
  },
};
