import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { SearchResultsProvider } from './contexts/search-results.context';
import {BrowserRouter} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <SearchResultsProvider>
        <App />
      </SearchResultsProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
