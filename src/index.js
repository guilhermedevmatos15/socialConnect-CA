import React from 'react';
import ReactDOM from 'react-dom/client';

import reportWebVitals from './test/reportWebVitals';

// * Routes
import Routes from './Routes';

// * Contexts
import Store from './app/contexts/Store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <React.StrictMode>
      <Store>
         <Routes />
      </Store>
   </React.StrictMode>
);

reportWebVitals();
