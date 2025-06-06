import type { Meta, StoryObj } from '@storybook/react';
import WhyAreaOne from './why-area-one';

const meta = {
  title: 'Components/Why/WhyAreaOne',
  component: WhyAreaOne,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof WhyAreaOne>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
