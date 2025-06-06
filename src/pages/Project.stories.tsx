import type { Meta, StoryObj } from '@storybook/react';
import Project from './project';
import { withProviders } from '../stories/decorators';

const meta = {
  title: 'Pages/Project',
  component: Project,
  decorators: [withProviders],
  parameters: {
    layout: 'fullscreen',
    docs: { story: { inline: false } },
  },
} satisfies Meta<typeof Project>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
