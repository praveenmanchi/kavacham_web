import type { Meta, StoryObj } from '@storybook/react';
import FeatureSeven from './feature-seven';

const meta = {
  title: 'Components/Features/FeatureSeven',
  component: FeatureSeven,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof FeatureSeven>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
