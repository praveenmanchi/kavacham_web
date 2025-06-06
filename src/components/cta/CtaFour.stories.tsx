import type { Meta, StoryObj } from '@storybook/react';
import CtaFour from './cta-four';

const meta = {
  title: 'Components/Cta/CtaFour',
  component: CtaFour,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof CtaFour>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
