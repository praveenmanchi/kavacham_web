import type { Meta, StoryObj } from '@storybook/react';
import FeatureFour from './feature-four';

const meta = {
  title: 'Components/Features/FeatureFour',
  component: FeatureFour,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof FeatureFour>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
