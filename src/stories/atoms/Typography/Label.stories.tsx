import { Meta, StoryObj } from "@storybook/react";
import { AtomLabel } from "../../../components";

const meta: Meta = {
  title: "React/atoms/Typography/Label",
  component: AtomLabel,
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
export const Label: Story = {
  args: {
    text: "Esto es un label",
    color: 'red',
    align: "center"
  },
};

