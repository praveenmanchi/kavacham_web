import type { Meta, StoryObj } from '@storybook/react';
import Blog from './blog';
import { withProviders } from '../stories/decorators';

const meta = {
  title: 'Pages/Blog',
  component: Blog,
  decorators: [withProviders],
  parameters: {
    layout: 'fullscreen',
    docs: { story: { inline: false } },
  },
} satisfies Meta<typeof Blog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
