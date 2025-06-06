import type { Meta, StoryObj } from '@storybook/react';
import HeroBannerFour from './hero-banner-four';

const meta = {
  title: 'Components/Hero Banner/HeroBannerFour',
  component: HeroBannerFour,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof HeroBannerFour>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
