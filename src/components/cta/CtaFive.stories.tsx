// src/components/cta/CtaFive.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import CtaFive from './cta-five';

const ctaFiveMeta = {
  title: 'Components/CTA/CtaFive',
  component: CtaFive,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof CtaFive>;

export default ctaFiveMeta;
type CtaFiveStory = StoryObj<typeof ctaFiveMeta>;

export const CtaFiveDefault: CtaFiveStory = {};
