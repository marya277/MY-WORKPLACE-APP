import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import AppWork from './AppWork.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <BrowserRouter>
   <AppWork />
  </BrowserRouter>

);
