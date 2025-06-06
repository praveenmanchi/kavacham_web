import type { Meta, StoryObj } from '@storybook/react';
import ProjectArea from './project-area';

const meta = {
  title: 'Components/Portfolio/ProjectArea',
  component: ProjectArea,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof ProjectArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
