import type { Meta, StoryObj } from '@storybook/react';
import SkillProgress from './skill-progress';

const meta = {
  title: 'Components/Skills/SkillProgress',
  component: SkillProgress,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof SkillProgress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    progress: 80,
  },
};
