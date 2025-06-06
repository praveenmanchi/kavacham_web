import type { Meta, StoryObj } from '@storybook/react';
import FaqOne from './faq-one';

const meta = {
  title: 'Components/Faq/FaqOne',
  component: FaqOne,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof FaqOne>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
