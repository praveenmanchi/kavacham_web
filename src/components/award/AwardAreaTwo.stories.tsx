import type { Meta, StoryObj } from '@storybook/react';
import AwardAreaTwo from './award-area-two';

const meta = {
  title: 'Components/Award/AwardAreaTwo',
  component: AwardAreaTwo,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof AwardAreaTwo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
