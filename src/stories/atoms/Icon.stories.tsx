import { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { AtomIcon } from "../../components";

const meta: Meta = {
  title: "React/atoms/Icon",
  component: AtomIcon,
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
export const Icon: Story = {
  args: {
    icon: 'plus',
    size: "large",
    color: 'red'
  },
};

