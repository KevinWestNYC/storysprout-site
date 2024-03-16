import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./Components/NavBar";
import AppRouter from "./Components/Router"; // Renamed to avoid naming conflict with 'Router' from 'react-router-dom'

export default function App() {
  return (
    <Router> {/* Use BrowserRouter to provide a routing context */}
      <div id="root">
        <main id="home">
          {/* <NavBar /> */}
          <AppRouter /> {/* This is your custom Router component, which should perhaps be renamed to avoid confusion */}
        </main>
        <p>FOOTER</p>
      </div>
    </Router>
  );
}
