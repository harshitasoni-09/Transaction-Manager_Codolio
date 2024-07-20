import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './app/containers/App';
import { ThemeProvider } from './contexts/ThemeContext';  // Import ThemeProvider
import './index.css';  // Global styles including theme variables

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider>  {/* Wrap App with ThemeProvider */}
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);
