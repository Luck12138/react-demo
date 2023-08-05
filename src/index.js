import React from 'react';
import ReactDOM from 'react-dom/client';

import {GlobalStyled} from './style.js';
import { IconfontStyle } from './statics/iconfont/iconfont.js'
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <><GlobalStyled /><IconfontStyle /><App /></>

);


