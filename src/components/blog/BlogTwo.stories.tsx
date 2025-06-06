import type { Meta, StoryObj } from '@storybook/react';
import BlogTwo from './blog-two';

const meta = {
  title: 'Components/Blog/BlogTwo',
  component: BlogTwo,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof BlogTwo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
