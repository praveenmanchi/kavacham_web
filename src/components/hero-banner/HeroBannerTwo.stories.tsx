import type { Meta, StoryObj } from '@storybook/react';
import HeroBannerTwo from './hero-banner-two';

const meta = {
  title: 'Components/Hero Banner/HeroBannerTwo',
  component: HeroBannerTwo,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof HeroBannerTwo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
