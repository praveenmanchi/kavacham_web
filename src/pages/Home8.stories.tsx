import type { Meta, StoryObj } from '@storybook/react';
import Home8 from './home-8';
import { withProviders } from '../stories/decorators';

const meta = {
  title: 'Pages/Home8',
  component: Home8,
  decorators: [withProviders],
  parameters: {
    layout: 'fullscreen',
    docs: { story: { inline: false } },
  },
} satisfies Meta<typeof Home8>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
