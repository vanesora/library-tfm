import { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { AtomTitle } from "../../../components";

const meta: Meta = {
  title: "React/atoms/Typography/Title",
  component: AtomTitle,
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
export const Title: Story = {
  args: {
    text: "Esto es un Titulo",
    color: 'red',
    align: "center",
    size: "small"
  },
};

