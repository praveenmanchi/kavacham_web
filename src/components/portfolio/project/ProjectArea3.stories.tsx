import type { Meta, StoryObj } from '@storybook/react';
import ProjectAreaThree from './project-area-3';

const meta = {
  title: 'Components/Portfolio/ProjectAreaThree',
  component: ProjectAreaThree,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof ProjectAreaThree>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
