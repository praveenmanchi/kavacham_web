import type { Meta, StoryObj } from '@storybook/react';
import PortfolioFour from './portfolio-four';

const meta = {
  title: 'Components/Portfolio/PortfolioFour',
  component: PortfolioFour,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof PortfolioFour>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
