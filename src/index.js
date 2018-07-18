import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import DataApp from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<DataApp />, document.getElementById('root'));
registerServiceWorker();
