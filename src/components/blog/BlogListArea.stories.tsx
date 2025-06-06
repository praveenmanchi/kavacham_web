import type { Meta, StoryObj } from '@storybook/react';
import BlogListArea from './blog-list-area';

const meta = {
  title: 'Components/Blog/BlogListArea',
  component: BlogListArea,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof BlogListArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
