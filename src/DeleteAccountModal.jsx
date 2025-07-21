import React, { useState, useRef, useEffect } from 'react';
import './App.css';

function DeleteAccountModal({ isOpen, onClose }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const modalRef = useRef(null);
  const firstInputRef = useRef(null);

  // Focus trap and initial focus
  useEffect(() => {
    if (isOpen && firstInputRef.current) {
      firstInputRef.current.focus();
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'Tab' && isOpen) {
        const focusableElements = modalRef.current.querySelectorAll(
          'input, button, [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey && document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');

    try {
      const response = await fetch('https://modernhealth-backend.onrender.com/api/delete-account', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage('Account deletion request submitted successfully. You will receive a confirmation email.');
        setEmail('');
        setPassword('');
        setTimeout(onClose, 2000); // Close modal after 2s
      } else {
        setError(data.message || 'Failed to submit deletion request.');
      }
    } catch (err) {
      setError('An error occurred. Please try again later.');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal" ref={modalRef} role="dialog" aria-labelledby="modal-title">
        <h2 id="modal-title">Delete Your Account</h2>
        <p>Please enter your login details to request account deletion.</p>
        {message && <p className="modal-message">{message}</p>}
        {error && <p className="modal-error">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              ref={firstInputRef}
              required
              aria-required="true"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              aria-required="true"
            />
          </div>
          <div className="modal-buttons">
            <button type="submit" className="modal-submit">Submit</button>
            <button type="button" className="modal-cancel" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default DeleteAccountModal;