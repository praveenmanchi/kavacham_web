import type { Meta, StoryObj } from '@storybook/react';
import CounterItem from './counter-item';

const meta = {
  title: 'Components/Counter/CounterItem',
  component: CounterItem,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof CounterItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    min: 0,
    max: 100,
  },
};
