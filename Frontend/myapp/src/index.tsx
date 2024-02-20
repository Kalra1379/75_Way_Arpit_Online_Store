import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from './Redux/store';
import { Provider } from 'react-redux';
import ErrorBoundary from './components/ErrorBoundary';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ErrorBoundary>
    <Provider store={store}>
      <App/>
    </Provider>
    </ErrorBoundary>
  </React.StrictMode>
);

