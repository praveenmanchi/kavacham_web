import type { Meta, StoryObj } from '@storybook/react';
import ContactInfo from './contact-info';

const meta = {
  title: 'Components/Contact/ContactInfo',
  component: ContactInfo,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof ContactInfo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
