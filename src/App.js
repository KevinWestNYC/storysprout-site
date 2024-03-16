import React, { useRef, useState } from "react";
import ReactDOM from "react-dom";
import { Canvas, useFrame } from "@react-three/fiber";
import Box from "./Components/Box";
import SciFiFlight from "./Components/SciFiFlight";
import Landing from "./Pages/Landing";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import NavBar from "./Components/NavBar";
import Link from '@material-ui/core/Link';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

export default function App() {
  return (
    <div id="root">
      <main id="home">
        <NavBar />
        <section className="home">
          <Landing />
        </section>
        <section className="about" id="about">
          <About />
        </section>
        <section className="projects" id="projects">
          <Projects />
        </section>
        <section className="contact" id="contact">
          <Contact />
        </section>
        <section id="footer">
          <div className="footer-container">
            <div>Made by Kevin West</div>
            <div>
              <Link
                href="https://www.linkedin.com/in/kevinwestnyc/"
                target="_blank"
              >
                <LinkedInIcon size="large" />
              </Link>
              <Link href="https://github.com/KevinWestNYC" target="_blank">
                <GitHubIcon size="large" />
              </Link>

              {/* <InstagramIcon size="large" href="https://github.com/KevinWestNYC" /> */}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}