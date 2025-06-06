import type { Meta, StoryObj } from '@storybook/react';
import MarqueeSlider from './marquee-slider';

const meta = {
  title: 'Components/MarqueeSlider',
  component: MarqueeSlider,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof MarqueeSlider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
