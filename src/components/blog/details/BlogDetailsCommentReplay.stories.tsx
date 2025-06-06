import type { Meta, StoryObj } from '@storybook/react';
import BlogDetailsCommentReplay from './blog-details-comment-reply';

const meta = {
  title: 'Components/Blog/BlogDetailsCommentReplay',
  component: BlogDetailsCommentReplay,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof BlogDetailsCommentReplay>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
