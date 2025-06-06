import type { Meta, StoryObj } from '@storybook/react';
import TeamDetails from './team-details';
import { withProviders } from '../stories/decorators';

const meta = {
  title: 'Pages/TeamDetails',
  component: TeamDetails,
  decorators: [withProviders],
  parameters: {
    layout: 'fullscreen',
    docs: { story: { inline: false } },
  },
} satisfies Meta<typeof TeamDetails>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
