import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Landing from '../Pages/Landing.js';
import Home from '../Pages/Home.js';

const AppRouter = (props) => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        {/* Use JSX syntax for the element prop */}
        {/* <Route path="/customerapplication" element={<CustomerApplicationRedirect />} /> */}
      </Routes>
      {/* <GoogleAnalytics /> */}
    </>
  );
};

export default AppRouter;
