import type { Meta, StoryObj } from '@storybook/react';
import FaqSingle from './faq-single';

const meta = {
  title: 'Components/Faq/FaqSingle',
  component: FaqSingle,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof FaqSingle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    item: {
      id: 1,
      question: 'What is Kavacham?',
      answer: 'A digital services provider.',
      isShow: true,
    },
    index: 0,
  },
};
