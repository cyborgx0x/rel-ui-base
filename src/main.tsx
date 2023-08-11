import React from 'react';

import App from './App';
import reportWebVitals from './reportWebVitals';
import { APP_TITLE, APP_DESCRIPTION } from './utils/constants';
import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render(<React.StrictMode>

  <title>{APP_TITLE}</title>
  <meta name="description" content={APP_DESCRIPTION} />
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Nunito+Sans:300,400,500" />
  <meta name="viewport" content="initial-scale=1, width=device-width" />

<App />
</React.StrictMode>);

// eslint-disable-next-line no-console
reportWebVitals();
