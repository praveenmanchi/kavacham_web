import type { Meta, StoryObj } from '@storybook/react';
import Seo from './seo';

const meta = {
  title: 'Components/Seo',
  component: Seo,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Seo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
