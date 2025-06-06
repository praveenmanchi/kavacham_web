import type { Meta, StoryObj } from '@storybook/react';
import Project6 from './project-6';
import { withProviders } from '../stories/decorators';

const meta = {
  title: 'Pages/Project6',
  component: Project6,
  decorators: [withProviders],
  parameters: {
    layout: 'fullscreen',
    docs: { story: { inline: false } },
  },
} satisfies Meta<typeof Project6>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
