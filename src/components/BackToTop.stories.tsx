import type { Meta, StoryObj } from '@storybook/react';
import BackToTop from './back-to-top';

const meta = {
  title: 'Components/BackToTop',
  component: BackToTop,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof BackToTop>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
