import type { Meta, StoryObj } from '@storybook/react';
import Projectthree from './projectthree';
import { withProviders } from '../stories/decorators';

const meta = {
  title: 'Pages/Projectthree',
  component: Projectthree,
  decorators: [withProviders],
  parameters: {
    layout: 'fullscreen',
    docs: { story: { inline: false } },
  },
} satisfies Meta<typeof Projectthree>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
