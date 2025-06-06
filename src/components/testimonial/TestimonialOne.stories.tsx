import type { Meta, StoryObj } from '@storybook/react';
import TestimonialOne from './testimonial-one';

const meta = {
  title: 'Components/Testimonial/TestimonialOne',
  component: TestimonialOne,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof TestimonialOne>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
