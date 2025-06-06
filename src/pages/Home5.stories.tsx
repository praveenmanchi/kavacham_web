import type { Meta, StoryObj } from '@storybook/react';
import Home5 from './home-5';
import { withProviders } from '../stories/decorators';

const meta = {
  title: 'Pages/Home5',
  component: Home5,
  decorators: [withProviders],
  parameters: {
    layout: 'fullscreen',
    docs: { story: { inline: false } },
  },
} satisfies Meta<typeof Home5>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
