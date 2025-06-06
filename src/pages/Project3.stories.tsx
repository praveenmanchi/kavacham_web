import type { Meta, StoryObj } from '@storybook/react';
import Project3 from './project-3';
import { withProviders } from '../stories/decorators';

const meta = {
  title: 'Pages/Project3',
  component: Project3,
  decorators: [withProviders],
  parameters: {
    layout: 'fullscreen',
    docs: { story: { inline: false } },
  },
} satisfies Meta<typeof Project3>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
