import React from "react";
import ReactDOM  from "react-dom/client";


import App from './App';
import { ResultContextProvider } from "./contexts/ResultsContextProvider";
import './global.css';


const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <ResultContextProvider>
<App/>
</ResultContextProvider>
);

