import type { Meta, StoryObj } from '@storybook/react';
import PortfolioFive from './portfolio-five';

const meta = {
  title: 'Components/Portfolio/PortfolioFive',
  component: PortfolioFive,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof PortfolioFive>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
