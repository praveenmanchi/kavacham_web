import type { Meta, StoryObj } from '@storybook/react';
import AboutTwo from './about-two';

const meta = {
  title: 'Components/About/AboutTwo',
  component: AboutTwo,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof AboutTwo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
