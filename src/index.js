import React from 'react';
import ReactDOM from 'react-dom';
import 'styles/core.css';
import App from 'App/app';
import registerServiceWorker from 'registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
