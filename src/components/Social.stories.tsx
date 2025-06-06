import type { Meta, StoryObj } from '@storybook/react';
import Social from './social';

const meta = {
  title: 'Components/Social',
  component: Social,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Social>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
