import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Parent from './Parent';
import Mobile from './props-state/Mobiles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Parent /> */}
    <Mobile />
  </React.StrictMode>
);