import type { Meta, StoryObj } from '@storybook/react';
import PortfolioSix from './portfolio-six';

const meta = {
  title: 'Components/Portfolio/PortfolioSix',
  component: PortfolioSix,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof PortfolioSix>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
