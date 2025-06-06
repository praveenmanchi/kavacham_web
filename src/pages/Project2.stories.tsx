import type { Meta, StoryObj } from '@storybook/react';
import Project2 from './project-2';
import { withProviders } from '../stories/decorators';

const meta = {
  title: 'Pages/Project2',
  component: Project2,
  decorators: [withProviders],
  parameters: {
    layout: 'fullscreen',
    docs: { story: { inline: false } },
  },
} satisfies Meta<typeof Project2>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
