import type { Meta, StoryObj } from '@storybook/react';
import BlogSingle from './blog-single';

const meta = {
  title: 'Components/Blog/BlogSingle',
  component: BlogSingle,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof BlogSingle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
