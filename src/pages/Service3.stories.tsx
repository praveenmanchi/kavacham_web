import type { Meta, StoryObj } from '@storybook/react';
import Service3 from './service-3';
import { withProviders } from '../stories/decorators';

const meta = {
  title: 'Pages/Service3',
  component: Service3,
  decorators: [withProviders],
  parameters: {
    layout: 'fullscreen',
    docs: { story: { inline: false } },
  },
} satisfies Meta<typeof Service3>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
