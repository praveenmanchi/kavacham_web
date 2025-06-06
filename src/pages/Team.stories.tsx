import type { Meta, StoryObj } from '@storybook/react';
import Team from './team';
import { withProviders } from '../stories/decorators';

const meta = {
  title: 'Pages/Team',
  component: Team,
  decorators: [withProviders],
  parameters: {
    layout: 'fullscreen',
    docs: { story: { inline: false } },
  },
} satisfies Meta<typeof Team>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
