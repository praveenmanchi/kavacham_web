import type { Meta, StoryObj } from '@storybook/react';
import ProjectDetails from './project-details';
import { withProviders } from '../stories/decorators';

const meta = {
  title: 'Pages/ProjectDetails',
  component: ProjectDetails,
  decorators: [withProviders],
  parameters: {
    layout: 'fullscreen',
    docs: { story: { inline: false } },
  },
} satisfies Meta<typeof ProjectDetails>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
