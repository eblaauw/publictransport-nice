import React from 'react';
import ReactDOM from 'react-dom';
import DepartureScreen from './components/DepartureScreen';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<DepartureScreen />, document.getElementById('root'));
registerServiceWorker();
