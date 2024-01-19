import React,{ useContext, useState } from 'react';
import './App.css';
import Home from './Home';
import FunctionContextComponent from './Context/functionContextcomponent';
import ThemeContextProvider from './Context/ThemeContextProvider';
import {createStore} from 'redux';



function App() {
   
  return (
   <>
   <ThemeContextProvider>
    <FunctionContextComponent />
   </ThemeContextProvider>

   </>
  );
}

export default App;
