import type { Meta, StoryObj } from '@storybook/react';
import Home6 from './home-6';
import { withProviders } from '../stories/decorators';

const meta = {
  title: 'Pages/Home6',
  component: Home6,
  decorators: [withProviders],
  parameters: {
    layout: 'fullscreen',
    docs: { story: { inline: false } },
  },
} satisfies Meta<typeof Home6>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
