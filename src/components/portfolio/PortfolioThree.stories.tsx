import type { Meta, StoryObj } from '@storybook/react';
import PortfolioThree from './portfolio-three';

const meta = {
  title: 'Components/Portfolio/PortfolioThree',
  component: PortfolioThree,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof PortfolioThree>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
