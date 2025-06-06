import type { Meta, StoryObj } from '@storybook/react';
import SearchPopup from './search-popup';

const meta = {
  title: 'Components/Popup/SearchPopup',
  component: SearchPopup,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof SearchPopup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
