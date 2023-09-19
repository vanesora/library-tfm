import { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { AtomButtonDefault } from "../../../components";

const meta: Meta = {
  title: "React/atoms/Button/Default",
  component: AtomButtonDefault,
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
export const ButtonDefault: Story = {
  args: {
    disabled: false,
    onClick: action("Event Click"),
    text: "Agregar",
    width: "140px",
    icon: "plus",
    size: "small",
    position: "left",
    customColor: "#ff1212",
    type: "button",
    color: "primary"

  },
};

