import type { Meta, StoryObj } from '@storybook/react';
import FaqTwo from './faq-two';

const meta = {
  title: 'Components/Faq/FaqTwo',
  component: FaqTwo,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof FaqTwo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
