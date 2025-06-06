import type { Meta, StoryObj } from '@storybook/react';
import ServiceArea1 from './service-area-1';

const meta = {
  title: 'Components/Service/ServiceArea1',
  component: ServiceArea1,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof ServiceArea1>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
