import type { Meta, StoryObj } from '@storybook/react';
import TeamTwo from './team-two';

const meta = {
  title: 'Components/Team/TeamTwo',
  component: TeamTwo,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof TeamTwo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
