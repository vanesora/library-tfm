import { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { OrganismSideNavBar } from "../../components/organisms/SideNavBar";
const meta: Meta = {
  title: "React/organisms/SideNavBar",
  component: OrganismSideNavBar,
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
export const SideNavBar: Story = {
  args: {
    userName: 'Juan Lopez',
    handleClickLogOut: action('click log out'),
    menuData: [
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
    buttonSelectClick: action('click menu'),
  },
};
