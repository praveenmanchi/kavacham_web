import type { Meta, StoryObj } from '@storybook/react';
import CtaTwo from './cta-two';

const meta = {
  title: 'Components/Cta/CtaTwo',
  component: CtaTwo,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof CtaTwo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
