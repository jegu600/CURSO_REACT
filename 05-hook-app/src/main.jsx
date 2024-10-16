import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';



// import HookAop from './HookApp';
// import CounterApp from './01-useState/CounterApp';
// import CounterWinthCustomHok from './01-useState/CounterWinthCustomHok';
// import SimpleForm from './02-useEffect/SimpleForm';
// import FormWithCustom from './02-useEffect/FormWithCustom';

import MultipleCustomHook from './03-examples/MultipleCustomHook';


//
import './index.css';


createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <MultipleCustomHook />
  /* </StrictMode>, */
)
