import type { Meta, StoryObj } from '@storybook/react';
import Home3 from './home-3';
import { withProviders } from '../stories/decorators';

const meta = {
  title: 'Pages/Home3',
  component: Home3,
  decorators: [withProviders],
  parameters: {
    layout: 'fullscreen',
    docs: { story: { inline: false } },
  },
} satisfies Meta<typeof Home3>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
