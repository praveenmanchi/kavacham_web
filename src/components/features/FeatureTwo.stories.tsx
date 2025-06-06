import type { Meta, StoryObj } from '@storybook/react';
import FeatureTwo from './feature-two';

const meta = {
  title: 'Components/Features/FeatureTwo',
  component: FeatureTwo,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof FeatureTwo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
