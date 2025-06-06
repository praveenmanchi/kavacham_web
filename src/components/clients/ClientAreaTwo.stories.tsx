import type { Meta, StoryObj } from '@storybook/react';
import ClientAreaTwo from './client-area-two';

const meta = {
  title: 'Components/Clients/ClientAreaTwo',
  component: ClientAreaTwo,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof ClientAreaTwo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
