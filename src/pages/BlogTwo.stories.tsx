import type { Meta, StoryObj } from '@storybook/react';
import BlogTwo from './blog-two';
import { withProviders } from '../stories/decorators';

const meta = {
  title: 'Pages/BlogTwo',
  component: BlogTwo,
  decorators: [withProviders],
  parameters: {
    layout: 'fullscreen',
    docs: { story: { inline: false } },
  },
} satisfies Meta<typeof BlogTwo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
