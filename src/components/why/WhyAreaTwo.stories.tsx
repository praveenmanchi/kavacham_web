import type { Meta, StoryObj } from '@storybook/react';
import WhyAreaTwo from './why-area-two';

const meta = {
  title: 'Components/Why/WhyAreaTwo',
  component: WhyAreaTwo,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof WhyAreaTwo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
