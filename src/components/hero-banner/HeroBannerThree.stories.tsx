import type { Meta, StoryObj } from '@storybook/react';
import HeroBannerThree from './hero-banner-three';

const meta = {
  title: 'Components/Hero Banner/HeroBannerThree',
  component: HeroBannerThree,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof HeroBannerThree>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
