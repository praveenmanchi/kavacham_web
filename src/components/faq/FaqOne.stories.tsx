import type { Meta, StoryObj } from '@storybook/react';
import FaqOne from './faq-one';
import { BrowserRouter } from 'react-router-dom';

const meta = {
  title: 'Components/Faq/FaqOne',
  component: FaqOne,
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
} satisfies Meta<typeof FaqOne>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
