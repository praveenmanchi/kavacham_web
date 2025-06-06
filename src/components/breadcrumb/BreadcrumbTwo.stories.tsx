import type { Meta, StoryObj } from '@storybook/react';
import BreadcrumbTwo from './breadcrumb-two';

const meta = {
  title: 'Components/Breadcrumb/BreadcrumbTwo',
  component: BreadcrumbTwo,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof BreadcrumbTwo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
