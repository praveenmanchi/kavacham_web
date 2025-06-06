import type { Meta, StoryObj } from '@storybook/react';
import BreadcrumbOne from './breadcrumb-one';

const meta = {
  title: 'Components/Breadcrumb/BreadcrumbOne',
  component: BreadcrumbOne,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof BreadcrumbOne>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
