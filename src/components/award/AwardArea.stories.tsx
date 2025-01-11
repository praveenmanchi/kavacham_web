import type { Meta, StoryObj } from '@storybook/react';
import AwardArea from './award-area';
import { BrowserRouter } from 'react-router-dom';

const awardMeta = {
  title: 'Components/Award/AwardArea',
  component: AwardArea,
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
  argTypes: {
    space: {
      control: 'select',
      options: ['space-bottom', 'space-top', 'space'],
      description: 'Controls the spacing of the component',
    },
  },
} satisfies Meta<typeof AwardArea>;

export default awardMeta;
type AwardStory = StoryObj<typeof awardMeta>;

export const AwardDefault: AwardStory = {};
export const AwardWithCustomSpace: AwardStory = {
  args: {
    space: 'space-top',
  },
};