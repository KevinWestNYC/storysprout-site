import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import AppRouter from "./Components/AppRouter";

export default function App() {
  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <main style={{ flex: 1 }}>
          {/* Ensuring that AppRouter (and thus, Home) can fill available space */}
          <AppRouter />
        </main>
        <footer className="footer-container" >
          {/* Links in the footer */}
          <Link to="/" style={{ margin: '0 10px' }}>Home</Link> |
          <Link to="/contact" style={{ margin: '0 10px' }}>Contact</Link> |
          <Link to="/privacy-policy" style={{ margin: '0 10px' }}>Privacy Policy</Link>
        </footer>
      </div>
    </Router>
  );
}
