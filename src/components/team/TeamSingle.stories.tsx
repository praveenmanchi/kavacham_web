import type { Meta, StoryObj } from '@storybook/react';
import TeamSingle from './team-single';

const meta = {
  title: 'Components/Team/TeamSingle',
  component: TeamSingle,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof TeamSingle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    elm: {
      id: 1,
      imageSrc: '/assets/img/team/team1.jpg',
      name: 'John Doe',
      designation: 'Developer',
    },
  },
};
