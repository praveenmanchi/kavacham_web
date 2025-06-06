import type { Meta, StoryObj } from '@storybook/react';
import PricingOne from './pricing-one';

const meta = {
  title: 'Components/Pricing/PricingOne',
  component: PricingOne,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof PricingOne>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
