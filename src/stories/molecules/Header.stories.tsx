import { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { MoleculeHeader } from "../../components/molecules/Header";

const meta: Meta = {
  title: "React/molecules/Header",
  component: MoleculeHeader,
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
export const Header: Story = {
  args: {
    userName: 'Juan Lopez',
    onLogout: action("Event Click"),
    onMenuToggle: action("Event Click")
  },
};

