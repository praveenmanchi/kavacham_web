import type { Meta, StoryObj } from '@storybook/react';
import Pricing from './pricing';
import { withProviders } from '../stories/decorators';

const meta = {
  title: 'Pages/Pricing',
  component: Pricing,
  decorators: [withProviders],
  parameters: {
    layout: 'fullscreen',
    docs: { story: { inline: false } },
  },
} satisfies Meta<typeof Pricing>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
