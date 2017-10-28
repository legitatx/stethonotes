import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { devToolsEnhancer } from 'redux-devtools-extension';
import reducer from './reducers';
import './index.css';
import Root from './components/Root';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducer, applyMiddleware(thunk), devToolsEnhancer());

ReactDOM.render(<Root store={store} />, document.getElementById('root'));
registerServiceWorker();
