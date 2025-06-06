import type { Meta, StoryObj } from '@storybook/react';
import ContactOne from './contact-one';

const meta = {
  title: 'Components/Contact/ContactOne',
  component: ContactOne,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof ContactOne>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
