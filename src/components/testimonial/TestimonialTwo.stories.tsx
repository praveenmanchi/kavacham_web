import type { Meta, StoryObj } from '@storybook/react';
import TestimonialTwo from './testimonial-two';

const meta = {
  title: 'Components/Testimonial/TestimonialTwo',
  component: TestimonialTwo,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof TestimonialTwo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
