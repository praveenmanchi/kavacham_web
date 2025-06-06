import type { Meta, StoryObj } from '@storybook/react';
import ProjectDetailsArea from './project-details-area';

const meta = {
  title: 'Components/Portfolio/ProjectDetailsArea',
  component: ProjectDetailsArea,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof ProjectDetailsArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
