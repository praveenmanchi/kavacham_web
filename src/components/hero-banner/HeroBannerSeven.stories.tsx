import type { Meta, StoryObj } from '@storybook/react';
import HeroBannerSeven from './hero-banner-seven';

const meta = {
  title: 'Components/Hero Banner/HeroBannerSeven',
  component: HeroBannerSeven,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof HeroBannerSeven>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
