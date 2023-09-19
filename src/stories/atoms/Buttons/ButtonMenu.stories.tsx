import { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { AtomButtonMenu } from "../../../components";

const meta: Meta = {
  title: "React/atoms/Button/Menu",
  component: AtomButtonMenu,
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
export const ButtonMenu: Story = {
  args: {
    disabled: false,
    onClick: action("Event Click"),
    text: "Users",
    selected: false,
    type: "button",
    icon: "manage"

  },
};

