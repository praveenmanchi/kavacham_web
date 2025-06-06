import type { Meta, StoryObj } from '@storybook/react';
import Projectone from './projectone';
import { withProviders } from '../stories/decorators';

const meta = {
  title: 'Pages/Projectone',
  component: Projectone,
  decorators: [withProviders],
  parameters: {
    layout: 'fullscreen',
    docs: { story: { inline: false } },
  },
} satisfies Meta<typeof Projectone>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
