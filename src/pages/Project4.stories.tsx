import type { Meta, StoryObj } from '@storybook/react';
import Project4 from './project-4';
import { withProviders } from '../stories/decorators';

const meta = {
  title: 'Pages/Project4',
  component: Project4,
  decorators: [withProviders],
  parameters: {
    layout: 'fullscreen',
    docs: { story: { inline: false } },
  },
} satisfies Meta<typeof Project4>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
