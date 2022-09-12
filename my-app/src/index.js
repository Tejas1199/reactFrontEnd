import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRoutes from './appRoutes/AppRoutes';
import './index.css';


const root = ReactDOM.createRoot
(document.getElementById('root'));
var roots=(
  <div class="background-color">
   <AppRoutes/>
    
</div>

);


root.render(roots);