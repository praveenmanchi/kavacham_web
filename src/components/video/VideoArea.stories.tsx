import type { Meta, StoryObj } from '@storybook/react';
import VideoArea from './video-area';

const meta = {
  title: 'Components/Video/VideoArea',
  component: VideoArea,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof VideoArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
