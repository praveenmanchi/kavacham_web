import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/scss/bootstrap.scss';
import App from './App.tsx';
import posthog from 'posthog-js';
import './index.scss';

posthog.init('phc_hzwcrAqdMSnJM7fRva48cLn1csfX2vvtIW1u8aUjWVe', {
  api_host: 'https://us.i.posthog.com'
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
