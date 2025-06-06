import type { Meta, StoryObj } from '@storybook/react';
import ScrollToTop from './scroll-to-top';

const meta = {
  title: 'Components/ScrollToTop',
  component: ScrollToTop,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof ScrollToTop>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
