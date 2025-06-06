import type { Meta, StoryObj } from '@storybook/react';
import NotFound from './not-found';
import { withProviders } from '../stories/decorators';

const meta = {
  title: 'Pages/NotFound',
  component: NotFound,
  decorators: [withProviders],
  parameters: {
    layout: 'fullscreen',
    docs: { story: { inline: false } },
  },
} satisfies Meta<typeof NotFound>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
