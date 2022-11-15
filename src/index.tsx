import React from 'react';
import ReactDOM from 'react-dom/client';
import REIP from './App';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(

  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<REIP />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
