import type { Meta, StoryObj } from '@storybook/react';
import ClientAreaThree from './client-area-three';

const meta = {
  title: 'Components/Clients/ClientAreaThree',
  component: ClientAreaThree,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof ClientAreaThree>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
