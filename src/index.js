import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// Import global css
import './index.css';
import 'rc-slider/assets/index.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
