import { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { MoleculePaginator } from "../../components/molecules/Paginator";
const meta: Meta = {
  title: "React/molecules/Paginator",
  component: MoleculePaginator,
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
export const Paginator: Story = {
  args: {
    totalPages: 3,
    onPageChange: action("click"),
    currentPage: 1,
  },
};

