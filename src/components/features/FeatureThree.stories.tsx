import type { Meta, StoryObj } from '@storybook/react';
import FeatureThree from './feature-three';

const meta = {
  title: 'Components/Features/FeatureThree',
  component: FeatureThree,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof FeatureThree>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
