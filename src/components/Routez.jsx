import React from 'react';
import { Routes, Route } from 'react-router';
import { useRoutes } from 'react-router';
import {Results} from '.';

const OPath= () => useRoutes([
  { path: "/search", element: <Results/> },
  { path: "/news", element: <Results/> },
  { path: "/image", element: <Results/>},
  { path: "/videos", element: <Results/>}
]);
const Routez = () => {
  return (
    <div className='p-4'>
        <Routes>
          <Route path= "/">
            {/* <Redirect to="/search" /> */}
            </Route>      
             
            </Routes>
            <OPath/>
        </div>
  )
}

export default Routez