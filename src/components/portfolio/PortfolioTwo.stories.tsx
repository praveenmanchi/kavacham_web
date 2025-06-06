import type { Meta, StoryObj } from '@storybook/react';
import PortfolioTwo from './portfolio-two';

const meta = {
  title: 'Components/Portfolio/PortfolioTwo',
  component: PortfolioTwo,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof PortfolioTwo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
