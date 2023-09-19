import { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { OrganismSideNavBar } from "../../components/organisms/SideNavBar";
import { OrganismTable } from "../../components/organisms/Table";
const meta: Meta = {
  title: "React/organisms/Table",
  component: OrganismTable,
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
export const Table: Story = {
  args: {
    headers: ["id", "name", "value"],
    data: [
      { id: 23, name: "arroz", value: "35" },
      { id: 24, name: "frijol", value: "23" },
    ],
    actions: {
      edit: action("click edit"),
      delete: action("click edit"),
      changeStatus: action("click edit"),
      view: action("click edit")
    },
    showId: false,
    showStatus: false
  },
};
