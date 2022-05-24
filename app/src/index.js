import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Provider} from "react-redux"
import { ReactRedApp } from './ReactRedux/ReactRedApp';
import { store } from './ReactRedux/Redux/store';
import { Box, ChakraProvider } from '@chakra-ui/react'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <Provider store={store}>
  //     <ReactRedApp />
  //   </Provider>
  // </React.StrictMode>
  <ChakraProvider>
    <h1>Abc</h1>
    <Box as='button' bg="tomato" p="8" w="30%">This is a box</Box>
  </ChakraProvider>
);

// 1. Provider
// 2. dispatch - useDispatch
// 3. access state - useSelector
