import { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { AtomInputText } from "../../../components";

const meta: Meta = {
  title: "React/atoms/Input/Text",
  component: AtomInputText,
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
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const InputText: Story = {
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

