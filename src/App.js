import React, {useState} from 'react';

import {Navbar,Footer,Routez} from './components';

import { BrowserRouter } from "react-router-dom";
const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);
  return (
    <BrowserRouter>
    <div className={darkTheme? 'dark': ''}>
      <div className="dark:bg-gray-900 bg-gray-100 dark:text-gray-200 black min-h-screen">
         <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>
         <Routez/>
         <Footer/>
      </div>
      </div>
      </BrowserRouter>
  )
}

export default App