import type { Meta, StoryObj } from '@storybook/react';
import BlogListItemTwo from './blog-list-item-two';

const meta = {
  title: 'Components/Blog/BlogListItemTwo',
  component: BlogListItemTwo,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof BlogListItemTwo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
