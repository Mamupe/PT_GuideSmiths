import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from './App';
import Home from './Pages/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import Phone from './Pages/Phone/Phone';
import Phones from './Pages/Phones/Phones';
import Tablet from './Pages/Tablet/Tablet';
import Tablets from './Pages/Tablets/Tablets';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="phones" element={<Phones />} />
          <Route path="phone/:id" element={<Phone />} />
          <Route path="tablets" element={<Tablets />} />
          <Route path="tablet/:id" element={<Tablet />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
