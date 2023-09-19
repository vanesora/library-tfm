import { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { AtomLink } from "../../components";

const meta: Meta = {
  title: "React/atoms/Link",
  component: AtomLink,
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
export const Link: Story = {
  args: {
    typeIcon: 'Left',
    text: "Esto es un link",
    customColor: '#ef1010',
    align: 'left',
    nameIconLeft: 'arrow_back_ios_FILL0_wght400_GRAD0_opsz48',
    target: '_new',
    url: 'www.google.com'
  },
};

