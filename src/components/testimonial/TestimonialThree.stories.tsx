import type { Meta, StoryObj } from '@storybook/react';
import TestimonialThree from './testimonial-three';

const meta = {
  title: 'Components/Testimonial/TestimonialThree',
  component: TestimonialThree,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof TestimonialThree>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
