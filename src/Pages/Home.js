import React, { Suspense, useRef } from 'react'
import { Container, Grid, Hidden } from "@material-ui/core";
import OMSLogo from "../Images/OMSLogo.webp"; // Ensure this path is correct
import AppStoreLogo from "../Images/Download_On_AppStore.svg";


export default function Home() {
    const appStoreLink = "https://apps.apple.com/app/6475610358"
  
  return (
    <div className="page-content">
        <img src={OMSLogo} className="home-logo"/>
        <a href={appStoreLink} target="_blank" rel="noopener noreferrer" >
            <img src={AppStoreLogo} alt="Download on the App Store" className="app-store-button"/>
        </a>
    </div>
  );
}
