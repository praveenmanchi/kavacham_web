import type { Meta, StoryObj } from '@storybook/react';
import Service2 from './service-2';
import { withProviders } from '../stories/decorators';

const meta = {
  title: 'Pages/Service2',
  component: Service2,
  decorators: [withProviders],
  parameters: {
    layout: 'fullscreen',
    docs: { story: { inline: false } },
  },
} satisfies Meta<typeof Service2>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
