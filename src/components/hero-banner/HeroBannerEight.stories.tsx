import type { Meta, StoryObj } from '@storybook/react';
import HeroBannerEight from './hero-banner-eight';

const meta = {
  title: 'Components/Hero Banner/HeroBannerEight',
  component: HeroBannerEight,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof HeroBannerEight>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
