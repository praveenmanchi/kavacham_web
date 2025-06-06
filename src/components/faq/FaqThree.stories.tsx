import type { Meta, StoryObj } from '@storybook/react';
import FaqThree from './faq-three';

const meta = {
  title: 'Components/Faq/FaqThree',
  component: FaqThree,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof FaqThree>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
