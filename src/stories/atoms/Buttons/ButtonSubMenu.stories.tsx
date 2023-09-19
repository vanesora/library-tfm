import { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { AtomButtonSubMenu } from "../../../components";

const meta: Meta = {
  title: "React/atoms/Button/SubMenu",
  component: AtomButtonSubMenu,
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
export const ButtonSubMenu: Story = {
  args: {
    disabled: false,
    onClick: action("Event Click"),
    text: "Activos",
    width: "100px",
    selected: true
  },
};

