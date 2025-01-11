// src/pages/About.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import AboutPage from './about';
import { withProviders } from '../stories/decorators';

const meta = {
  title: 'Pages/About',
  component: AboutPage,
  decorators: [withProviders],
  parameters: {
    layout: 'fullscreen',
    docs: {
      story: {
        inline: false,
      },
    },
  },
} satisfies Meta<typeof AboutPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};