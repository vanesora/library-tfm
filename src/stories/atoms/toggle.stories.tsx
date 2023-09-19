import { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { AtomIcon, AtomToggle } from "../../components";

const meta: Meta = {
  title: "React/atoms/Toggle",
  component: AtomToggle,
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
export const Toggle: Story = {
  args: {
    isChecked: true,
    disabled: false,
    size: 'medium',
    text: 'label',
    onToggle: action("Event Click")
  },
};

