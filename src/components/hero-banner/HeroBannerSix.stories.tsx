import type { Meta, StoryObj } from '@storybook/react';
import HeroBannerSix from './hero-banner-six';

const meta = {
  title: 'Components/Hero Banner/HeroBannerSix',
  component: HeroBannerSix,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof HeroBannerSix>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
