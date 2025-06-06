import type { Meta, StoryObj } from '@storybook/react';
import BlogListItem from './blog-list-item';

const meta = {
  title: 'Components/Blog/BlogListItem',
  component: BlogListItem,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof BlogListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    elm: {
      id: 1,
      image: '/assets/img/blog/blog_img01.jpg',
      date: 'Jan 1, 2024',
      category: 'News',
      title: 'Sample Blog',
      icon: '',
      page: '',
    },
  },
};
