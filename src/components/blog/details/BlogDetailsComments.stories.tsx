import type { Meta, StoryObj } from '@storybook/react';
import BlogDetailsComments from './blog-details-comments';

const meta = {
  title: 'Components/Blog/BlogDetailsComments',
  component: BlogDetailsComments,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof BlogDetailsComments>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
