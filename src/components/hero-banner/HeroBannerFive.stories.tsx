import type { Meta, StoryObj } from '@storybook/react';
import HeroBannerFive from './hero-banner-five';

const meta = {
  title: 'Components/Hero Banner/HeroBannerFive',
  component: HeroBannerFive,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof HeroBannerFive>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
