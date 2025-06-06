import type { Meta, StoryObj } from '@storybook/react';
import Blog2ColArea from './blog-2-col-area';

const meta = {
  title: 'Components/Blog/Blog2ColArea',
  component: Blog2ColArea,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Blog2ColArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
