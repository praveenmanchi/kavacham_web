import type { Meta, StoryObj } from '@storybook/react';
import TeamOne from './team-one';

const meta = {
  title: 'Components/Team/TeamOne',
  component: TeamOne,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof TeamOne>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
