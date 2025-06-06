import type { Meta, StoryObj } from '@storybook/react';
import CtaOne from './cta-one';

const meta = {
  title: 'Components/Cta/CtaOne',
  component: CtaOne,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof CtaOne>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
