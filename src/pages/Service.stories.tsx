import type { Meta, StoryObj } from '@storybook/react';
import Service from './service';
import { withProviders } from '../stories/decorators';

const meta = {
  title: 'Pages/Service',
  component: Service,
  decorators: [withProviders],
  parameters: {
    layout: 'fullscreen',
    docs: { story: { inline: false } },
  },
} satisfies Meta<typeof Service>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
