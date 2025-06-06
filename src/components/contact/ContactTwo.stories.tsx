import type { Meta, StoryObj } from '@storybook/react';
import ContactTwo from './contact-two';

const meta = {
  title: 'Components/Contact/ContactTwo',
  component: ContactTwo,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof ContactTwo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
