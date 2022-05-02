import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Provider} from "react-redux"
import { ReactRedApp } from './ReactRedux/ReactRedApp';
import { store } from './ReactRedux/Redux/store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReactRedApp />
    </Provider>
  </React.StrictMode>
);

// 1. Provider
// 2. dispatch - useDispatch
// 3. access state - useSelector
