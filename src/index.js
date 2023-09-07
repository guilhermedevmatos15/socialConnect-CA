import React from 'react';
import ReactDOM from 'react-dom/client';

import reportWebVitals from './test/reportWebVitals';

// ? Routes
import Routes from './Routes';

// ? Contexts
import GlobalContext from './app/contexts/GlobalContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <React.StrictMode>
      <GlobalContext>
         <Routes />
      </GlobalContext>
   </React.StrictMode>
);

reportWebVitals();
