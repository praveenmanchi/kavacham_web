import type { Meta, StoryObj } from '@storybook/react';
import Home7 from './home-7';
import { withProviders } from '../stories/decorators';

const meta = {
  title: 'Pages/Home7',
  component: Home7,
  decorators: [withProviders],
  parameters: {
    layout: 'fullscreen',
    docs: { story: { inline: false } },
  },
} satisfies Meta<typeof Home7>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
