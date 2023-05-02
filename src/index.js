import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyle } from '../../tesla-clone-master/src/Global.style';
import * as ServiceWorker from './serviceWorker'


ReactDOM.render(

<GlobalStyle/>,

  document.getElementById('root')
)

ServiceWorker.unregister();