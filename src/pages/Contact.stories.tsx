import type { Meta, StoryObj } from '@storybook/react';
import Contact from './contact';
import { withProviders } from '../stories/decorators';

const meta = {
  title: 'Pages/Contact',
  component: Contact,
  decorators: [withProviders],
  parameters: {
    layout: 'fullscreen',
    docs: { story: { inline: false } },
  },
} satisfies Meta<typeof Contact>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
