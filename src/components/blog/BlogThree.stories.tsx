import type { Meta, StoryObj } from '@storybook/react';
import BlogThree from './blog-three';

const meta = {
  title: 'Components/Blog/BlogThree',
  component: BlogThree,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof BlogThree>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
