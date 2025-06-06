import type { Meta, StoryObj } from '@storybook/react';
import ServiceAreaOne from './service-area-1';
import { BrowserRouter } from 'react-router-dom';

const meta = {
  title: 'Components/Service/ServiceAreaOne',
  component: ServiceAreaOne,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof ServiceAreaOne>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
