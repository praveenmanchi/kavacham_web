import type { Meta, StoryObj } from '@storybook/react';
import BlogDetailsArea from './blog-details-area';

const meta = {
  title: 'Components/Blog/BlogDetailsArea',
  component: BlogDetailsArea,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof BlogDetailsArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    blog: {
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
