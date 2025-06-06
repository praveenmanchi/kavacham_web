import type { Meta, StoryObj } from '@storybook/react';
import BlogSingle from './blog-single';

const meta = {
  title: 'Components/Blog/BlogSingle',
  component: BlogSingle,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof BlogSingle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    item: {
      id: 1,
      image: '/assets/img/blog/blog_img01.jpg',
      image2: '/assets/img/blog/blog_img02.jpg',
      date: 'Jan 1, 2024',
      category: 'News',
      title: 'Sample Blog',
      icon: '',
      page: '',
    },
    style_2: false,
    cardStyle: '',
  },
};
