// src/components/about/AboutOne.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import AboutOne from './about-one';
import { BrowserRouter } from 'react-router-dom';

const meta = {
  title: 'Components/About/AboutOne',
  component: AboutOne,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof AboutOne>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};