import type { Meta, StoryObj } from '@storybook/react';
import BlogOne from './blog-one';

const meta = {
  title: 'Components/Blog/BlogOne',
  component: BlogOne,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof BlogOne>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
