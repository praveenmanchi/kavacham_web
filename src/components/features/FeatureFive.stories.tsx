import type { Meta, StoryObj } from '@storybook/react';
import FeatureFive from './feature-five';

const meta = {
  title: 'Components/Features/FeatureFive',
  component: FeatureFive,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof FeatureFive>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
