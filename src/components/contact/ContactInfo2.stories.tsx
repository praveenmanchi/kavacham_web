import type { Meta, StoryObj } from '@storybook/react';
import ContactInfo2 from './contact-info-2';

const meta = {
  title: 'Components/Contact/ContactInfo2',
  component: ContactInfo2,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof ContactInfo2>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
