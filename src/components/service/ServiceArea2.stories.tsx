import type { Meta, StoryObj } from '@storybook/react';
import ServiceArea2 from './service-area-2';

const meta = {
  title: 'Components/Service/ServiceArea2',
  component: ServiceArea2,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof ServiceArea2>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
