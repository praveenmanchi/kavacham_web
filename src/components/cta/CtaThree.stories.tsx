import type { Meta, StoryObj } from '@storybook/react';
import CtaThree from './cta-three';

const meta = {
  title: 'Components/Cta/CtaThree',
  component: CtaThree,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof CtaThree>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
