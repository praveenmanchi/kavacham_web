import type { Meta, StoryObj } from '@storybook/react';
import SkillArea from './skill-area';

const meta = {
  title: 'Components/Skills/SkillArea',
  component: SkillArea,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof SkillArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
