import type { Meta, StoryObj } from '@storybook/react';
import ServiceDetailsArea from './service-details-area';

const meta = {
  title: 'Components/Service/ServiceDetailsArea',
  component: ServiceDetailsArea,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof ServiceDetailsArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
