import type { Meta, StoryObj } from '@storybook/react';
import FeatureSix from './feature-six';

const meta = {
  title: 'Components/Features/FeatureSix',
  component: FeatureSix,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof FeatureSix>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
