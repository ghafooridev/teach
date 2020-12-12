import React from 'react';
import ReactDOM from 'react-dom';
import ThemeContextProvider from "./Contexts/Theme"
import App from './App';
import swDev from "./swDev"

ReactDOM.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <App/>
    </ThemeContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

swDev()

