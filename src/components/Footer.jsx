import React from 'react';
import './Footer.css';

// -----------------------------------------------
// Footer Component
// This component stays at the bottom of the page
// and displays basic copyright info.
// -----------------------------------------------
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>© 2026 AirbnbClone, Inc. All rights reserved.</p>
        <div className="footer-links">
          <span>Privacy</span>
          <span>·</span>
          <span>Terms</span>
          <span>·</span>
          <span>Sitemap</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
