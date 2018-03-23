import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Hello from './containers/Hello/Hello';
import Timer from './containers/Timer/Timer';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { enthusiasm, timerReducer } from './reducers/index';
import { StoreState, TimeState } from './types/index';
import thunk from 'redux-thunk';

import './index.css';

const store = createStore<TimeState>(timerReducer, {
    timer: null,
    counter: 0,
    start: false
}, applyMiddleware(thunk));

// ReactDOM.render(
//   <Provider store={store}>
//     <Hello />
//   </Provider>,
//   document.getElementById('root') as HTMLElement
// );
ReactDOM.render(
  <Provider store={store}> 
      <Timer/>
  </Provider>,
    document.getElementById('root') as HTMLElement
  );
