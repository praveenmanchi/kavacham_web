import type { Meta, StoryObj } from '@storybook/react';
import Project5 from './project-5';
import { withProviders } from '../stories/decorators';

const meta = {
  title: 'Pages/Project5',
  component: Project5,
  decorators: [withProviders],
  parameters: {
    layout: 'fullscreen',
    docs: { story: { inline: false } },
  },
} satisfies Meta<typeof Project5>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
