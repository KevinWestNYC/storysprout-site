import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home.js';
import Contact from '../Pages/Contact.js';
import PrivacyPolicy from '../Pages/PrivacyPolicy.js';

const AppRouter = (props) => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        {/* Use JSX syntax for the element prop */}
        <Route path="/contact" element={<Contact/>} />
        <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
      </Routes>
      {/* <GoogleAnalytics /> */}
    </>
  );
};

export default AppRouter;
