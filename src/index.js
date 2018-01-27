import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/semantic-ui-css/semantic.min.css';

ReactDOM.render(<Routes />, document.getElementById('root'));
registerServiceWorker();
