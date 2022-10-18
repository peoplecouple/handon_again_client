import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/reset.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import Scroll from './components/Scroll';
import { Provider } from 'react-redux';
import store from './app/store'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <BrowserRouter basename={process.env.PUBLIC_URL}> */}
    <BrowserRouter>
      <Scroll />
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
