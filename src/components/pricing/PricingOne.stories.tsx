import type { Meta, StoryObj } from '@storybook/react';
import PricingOne from './pricing-one';
import { BrowserRouter } from 'react-router-dom';

const meta = {
  title: 'Components/Pricing/PricingOne',
  component: PricingOne,
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
} satisfies Meta<typeof PricingOne>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
