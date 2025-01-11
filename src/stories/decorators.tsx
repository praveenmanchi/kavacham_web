// src/stories/decorators.tsx
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

export const withProviders = (Story: React.ComponentType) => (
  <HelmetProvider>
    <BrowserRouter>
      <Story />
    </BrowserRouter>
  </HelmetProvider>
);