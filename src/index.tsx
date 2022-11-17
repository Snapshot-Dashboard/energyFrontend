import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './Redux/Store/Store'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='/' element={<App />} />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);
