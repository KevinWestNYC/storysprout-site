import React, { Suspense, useRef } from 'react'
import { Container, Grid, Hidden } from "@material-ui/core";
import OMSLogo from "../Images/OMSLogo.webp"; // Ensure this path is correct
import AppStoreLogo from "../Images/Download_On_AppStore.svg";
import AppPreview from "../Images/AppPreview.mp4";


export default function Home() {
    const appStoreLink = "https://apps.apple.com/app/6475610358"
  
  return (
    <div className="page-content">
        {/* <img src={OMSLogo} className="home-logo"/> */}
        <video
                src={AppPreview}
                controls
                autoPlay
                loop
                style={{ width: '95%', height: 'auto', maxWidth: '550px', border:'10px solid white', borderRadius:'10px' }} // Adjust maxWidth to fit your design needs
            />
        {/* <div> */}
        <a href={appStoreLink} target="_blank" rel="noopener noreferrer" >
            <img src={AppStoreLogo} alt="Download on the App Store" className="app-store-button"/>
        </a>
        <p className="gabriela-regular">Available Exclusively On The App Store!</p>
        {/* </div> */}
    </div>
  );
}
