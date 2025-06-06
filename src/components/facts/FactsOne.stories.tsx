import type { Meta, StoryObj } from '@storybook/react';
import FactsOne from './facts-one';

const meta = {
  title: 'Components/Facts/FactsOne',
  component: FactsOne,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof FactsOne>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
