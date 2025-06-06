import type { Meta, StoryObj } from '@storybook/react';
import Home2 from './home-2';
import { withProviders } from '../stories/decorators';

const meta = {
  title: 'Pages/Home2',
  component: Home2,
  decorators: [withProviders],
  parameters: {
    layout: 'fullscreen',
    docs: { story: { inline: false } },
  },
} satisfies Meta<typeof Home2>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
