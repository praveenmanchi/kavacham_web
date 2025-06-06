import type { Meta, StoryObj } from '@storybook/react';
import ProjectAreaFour from './project-area-4';

const meta = {
  title: 'Components/Portfolio/ProjectAreaFour',
  component: ProjectAreaFour,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof ProjectAreaFour>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
