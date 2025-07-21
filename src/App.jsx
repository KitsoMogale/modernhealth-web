import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './Home';
import PrivacyPolicy from './PrivacyPolicy';
import DeleteAccountModal from './DeleteAccountModal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <BrowserRouter>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
        <footer>
          <p>© 2025 ModernHealth. All rights reserved.</p>
          <div className="footer-links">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <a href="mailto:support@modernhealth.com">Contact Us</a>
            <button onClick={openModal} className="footer-link-button" aria-label="Delete Account">
              Delete Account
            </button>
          </div>
          <div className="social-icons">
            <a href="https://twitter.com/modernhealth" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
            <a href="https://instagram.com/modernhealth" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
          </div>
        </footer>
        <DeleteAccountModal isOpen={isModalOpen} onClose={closeModal} />
      </div>
    </BrowserRouter>
  );
}

export default App;