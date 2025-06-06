import type { Meta, StoryObj } from '@storybook/react';
import BlogSidebar from './blog-sidebar';

const meta = {
  title: 'Components/Blog/BlogSidebar',
  component: BlogSidebar,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof BlogSidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
