import type { Meta, StoryObj } from '@storybook/react';
import Home4 from './home-4';
import { withProviders } from '../stories/decorators';

const meta = {
  title: 'Pages/Home4',
  component: Home4,
  decorators: [withProviders],
  parameters: {
    layout: 'fullscreen',
    docs: { story: { inline: false } },
  },
} satisfies Meta<typeof Home4>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
