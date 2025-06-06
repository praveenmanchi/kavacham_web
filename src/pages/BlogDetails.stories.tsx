import type { Meta, StoryObj } from '@storybook/react';
import BlogDetails from './blog-details';
import { withProviders } from '../stories/decorators';

const meta = {
  title: 'Pages/BlogDetails',
  component: BlogDetails,
  decorators: [withProviders],
  parameters: {
    layout: 'fullscreen',
    docs: { story: { inline: false } },
  },
} satisfies Meta<typeof BlogDetails>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
