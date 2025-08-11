import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import Hyperspeed from '../components/hyperspeed/Hyperspeed';
import { Outlet } from 'react-router-dom';
import FooterLayout from './FooterLayout'; // Import the FooterLayout component
import TargetCursor from '../components/targetcursor/TargetCursor';

const Rootlayout = () => {
  return (
    <div className="layout-container">
      <Navbar />
      <div className="content">
        <Hyperspeed />
        <Outlet />
      </div>
      {/* <Footer /> */}
      <FooterLayout /> 
      <TargetCursor />
    </div>
  );
};

export default Rootlayout;
