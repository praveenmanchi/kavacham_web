// .storybook/manager.ts
import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming/create';

const theme = create({
  base: 'dark',

  // Brand
  brandTitle: 'Kavacham',
  brandUrl: '/',
  brandImage: '/logo.svg',
  brandTarget: '_self',

  // Colors
  colorPrimary: '#FF4785',
  colorSecondary: '#1EA7FD',

  // UI
  appBg: '#1B1C1D',
  appContentBg: '#121212',
  appBorderColor: '#333333',
  appBorderRadius: 4,

  // Text colors
  textColor: '#FFFFFF',
  textInverseColor: '#1B1C1D',

  // Toolbar colors
  barTextColor: '#999999',
  barSelectedColor: '#FFFFFF',
  barBg: '#1B1C1D',

  // Form colors
  inputBg: '#1B1C1D',
  inputBorder: '#333333',
  inputTextColor: '#FFFFFF',
  inputBorderRadius: 4,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Cards and panels
  cardBg: '#1B1C1D',
  cardBorderColor: '#333333',
});

addons.setConfig({
  theme,
  showNav: true,
  showPanel: true,
  panelPosition: 'bottom',
  enableShortcuts: true,
  sidebar: {
    showRoots: true,
    collapsedRoots: ['other'],
  },
});