import type { Meta, StoryObj } from '@storybook/react';
import BlogFour from './blog-four';

const meta = {
  title: 'Components/Blog/BlogFour',
  component: BlogFour,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof BlogFour>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
