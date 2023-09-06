import React from 'react';
import ReactDOM from 'react-dom/client';

import reportWebVitals from './test/reportWebVitals';

// ? Components
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
