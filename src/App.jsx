import React,{ useContext, useState } from 'react';
import './App.css';
import Home from './Home';
import FunctionContextComponent from './functionContextcomponent';
import ThemeContextProvider from './ThemeContextProvider';




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
