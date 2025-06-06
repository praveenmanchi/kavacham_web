import type { Meta, StoryObj } from '@storybook/react';
import PortfolioOne from './portfolio-one';

const meta = {
  title: 'Components/Portfolio/PortfolioOne',
  component: PortfolioOne,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof PortfolioOne>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
