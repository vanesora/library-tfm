import { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { AtomButtonBack, IPropsBackButton } from "../../../components";

const meta: Meta = {
  title: "React/atoms/Button/Back",
  component: AtomButtonBack,
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
};

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Back: Story = {
  args: {
    disabled: false,
    onClick: action("Event Click"),
    text: "Back to rewards",
    width: "140px",
  },
};

