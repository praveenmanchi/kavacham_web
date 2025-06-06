import type { Meta, StoryObj } from '@storybook/react';
import ProjectAreaTwo from './project-area-2';

const meta = {
  title: 'Components/Portfolio/ProjectAreaTwo',
  component: ProjectAreaTwo,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof ProjectAreaTwo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
