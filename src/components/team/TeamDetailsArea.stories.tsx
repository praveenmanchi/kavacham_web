import type { Meta, StoryObj } from '@storybook/react';
import TeamDetailsArea from './team-details-area';

const meta = {
  title: 'Components/Team/TeamDetailsArea',
  component: TeamDetailsArea,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof TeamDetailsArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    team: {
      id: 1,
      imageSrc: '/assets/img/team/team1.jpg',
      name: 'John Doe',
      designation: 'Developer',
    },
  },
};
