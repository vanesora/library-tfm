import { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { AtomParagraph } from "../../../components";

const meta: Meta = {
  title: "React/atoms/Typography/Paragraph",
  component: AtomParagraph,
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
export const Paragraph: Story = {
  args: {
    size: 'large',
    text: 'Texto de prueba',
    color: '#25205b',
    align: "center",
  },
};
