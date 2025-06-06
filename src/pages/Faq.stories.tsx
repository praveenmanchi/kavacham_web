import type { Meta, StoryObj } from '@storybook/react';
import Faq from './faq';
import { withProviders } from '../stories/decorators';

const meta = {
  title: 'Pages/Faq',
  component: Faq,
  decorators: [withProviders],
  parameters: {
    layout: 'fullscreen',
    docs: { story: { inline: false } },
  },
} satisfies Meta<typeof Faq>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
