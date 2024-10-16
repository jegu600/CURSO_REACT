import React from 'react';
import ReactDOM from 'react-dom/client';
// import { App, HelloWorlApp, Pollo } from './HelloWorlApp';

import './styles.css';
import FirtsApp from './FirtsApp';
import CounterApp from './CounterApp';





// ReactDOM.createRoot( document.getElementById('root') ).render(
//     <React.StrictMode>
//         <App />        
//         <Pollo />         
//         <HelloWorlApp />        
//         <FirtsApp />       
//     </React.StrictMode>    
// );


ReactDOM.createRoot( document.getElementById('root') ).render(
    <React.StrictMode>     
        <CounterApp value={5} />  
    </React.StrictMode>    
);

    
  
