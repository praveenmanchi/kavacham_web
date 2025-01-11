// src/components/client/ClientArea.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import ClientArea from './client-area';

const clientMeta = {
  title: 'Components/Client/ClientArea',
  component: ClientArea,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    space: {
      control: 'select',
      options: ['space-bottom', 'space-top', 'space'],
      description: 'Controls the spacing of the component',
    },
  },
} satisfies Meta<typeof ClientArea>;

export default clientMeta;
type ClientStory = StoryObj<typeof clientMeta>;

export const ClientDefault: ClientStory = {};
export const ClientWithCustomSpace: ClientStory = {
  args: {
    space: 'space-top',
  },
};