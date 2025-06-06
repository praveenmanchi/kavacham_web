import type { Meta, StoryObj } from '@storybook/react';
import Projecttwo from './projecttwo';
import { withProviders } from '../stories/decorators';

const meta = {
  title: 'Pages/Projecttwo',
  component: Projecttwo,
  decorators: [withProviders],
  parameters: {
    layout: 'fullscreen',
    docs: { story: { inline: false } },
  },
} satisfies Meta<typeof Projecttwo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
