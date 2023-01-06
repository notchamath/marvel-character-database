import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { SearchResultsProvider } from './contexts/search-results.context';
import {UserProvider} from './contexts/user.context';

import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <SearchResultsProvider>
        <UserProvider>
          <App />
        </UserProvider>
      </SearchResultsProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
