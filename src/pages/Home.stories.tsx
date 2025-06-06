import type { Meta, StoryObj } from '@storybook/react';
import HomeFive from './home';
import { withProviders } from '../stories/decorators';

const meta = {
  title: 'Pages/Home',
  component: HomeFive,
  decorators: [withProviders],
  parameters: {
    layout: 'fullscreen',
    docs: {
      story: {
        inline: false,
      },
    },
  },
} satisfies Meta<typeof HomeFive>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
