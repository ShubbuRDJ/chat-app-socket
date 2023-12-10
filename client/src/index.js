import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import loader from './assets/loader.gif';

const App = lazy(()=>import('./App'))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Suspense fallback={<div className='avatar-whole-container'>
    <img src={loader} alt="loader" className="loader" />
</div>}>
      <App />
    </Suspense>
);

