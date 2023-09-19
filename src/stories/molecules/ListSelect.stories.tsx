import { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { AtomIcon } from "../../components";
import { MoleculeListSelect } from "../../components/molecules/ListSelect";

const meta: Meta = {
  title: "React/molecules/ListSelect",
  component: MoleculeListSelect,
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
export const ListSelect: Story = {
  args: {
    data: [
      {
        id: 1,
        disabled: false,
        onClick: action("Event Click"),
        text: "Usuarios",
        type: "menu",
        icon: "manage"
      },
      {
        id: 2,
        disabled: false,
        onClick: action("Event Click"),
        text: "Configuración",
        type: "menu",
        icon: "settings"
      },
    ],
    direction: "row",
  },
};

