import type { Meta, StoryObj } from '@storybook/react';
import FeatureOne from './feature-one';

const meta = {
  title: 'Components/Features/FeatureOne',
  component: FeatureOne,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof FeatureOne>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
