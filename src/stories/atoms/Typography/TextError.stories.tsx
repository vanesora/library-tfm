import { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { AtomTextError, AtomTitle } from "../../../components";

const meta: Meta = {
  title: "React/atoms/Typography/TextError",
  component: AtomTextError,
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
export const TextError: Story = {
  args: {
    text: "Hay un error",
    color: 'red',
    align: "center"
  },
};

