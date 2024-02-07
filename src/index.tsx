import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import UseStateItem from './UseStateItem';
import UseRefShowHide from './useRefShowHide';
import SpesialButton from './SpesialButton';
import UseEffectPosition from './useEffectPosition';
import EffectBg from './effectBg';
import ResetCount from './resetCount';



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
    <UseStateItem/>
    <UseRefShowHide/>
    <SpesialButton/>
    <UseEffectPosition/>
    <EffectBg/>
    <ResetCount/>
  </React.StrictMode>
);

reportWebVitals();
