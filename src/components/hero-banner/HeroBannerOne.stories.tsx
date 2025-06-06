import type { Meta, StoryObj } from '@storybook/react';
import HeroOne from './hero-banner-one';
import { BrowserRouter } from 'react-router-dom';

const meta = {
  title: 'Components/Hero/HeroBannerOne',
  component: HeroOne,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof HeroOne>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
