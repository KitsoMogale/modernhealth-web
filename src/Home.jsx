import React, { useState, useEffect, useRef } from 'react';
import './App.css';

function Home() {
  const screenshots = [
    '/Screenshot1.jpg',
    '/Screenshot2.jpg',
    '/Screenshot3.jpg',
    '/Screenshot4.jpg',
    '/Screenshot5.jpg',
    '/Screenshot6.jpg',
  ];

  const [current, setCurrent] = useState(0);
  const touchStartX = useRef(null);

  // Auto-play
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % screenshots.length);
    }, 9000);
    return () => clearInterval(timer);
  }, [screenshots.length]);

  const prevSlide = () => {
    setCurrent((current - 1 + screenshots.length) % screenshots.length);
  };

  const nextSlide = () => {
    setCurrent((current + 1) % screenshots.length);
  };

  const goToSlide = (index) => {
    setCurrent(index);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    if (deltaX > 50) prevSlide();
    else if (deltaX < -50) nextSlide();
    touchStartX.current = null;
  };

  return (
    <main>
      <header className="hero" aria-label="ModernHealth introduction">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">ModernHealth</h1>
          <h2 className="hero-subtitle">You Are What You Eat</h2>
          <p className="hero-description">
            Track your diet and learn how food shapes your body with AI-powered insights and personalized nutrition plans.
          </p>
          <a href="https://drive.google.com/file/d/1Go8N307BBLxFHYQ7Dw21R4tN7zs1qfy5/view" className="cta-button" aria-label="Download ModernHealth app">
            Download
          </a>
        </div>
      </header>

      <section className="features">
        <h2>Master Your Nutrition</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <i className="fas fa-heart"></i>
            <h3>Diet-Body Connection</h3>
            <p>Explore how food impacts your cells, tissues, and organs with engaging lessons.</p>
          </div>
          <div className="feature-card">
            <i className="fas fa-utensils"></i>
            <h3>AI Nutrition Tracking</h3>
            <p>Log meals or snap photos to track calories and nutrients, seeing how they fuel your body.</p>
          </div>
          <div className="feature-card">
            <i className="fas fa-carrot"></i>
            <h3>Personalized Meal Plans</h3>
            <p>Get recipes tailored to your dietary needs to support a healthier body.</p>
          </div>
        </div>
      </section>

      <section className="slideshow-section">
        <h2>See ModernHealth in Action</h2>
        <div className="slideshow-container">
          <div
            className="slideshow"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            aria-label="ModernHealth app screenshots slideshow"
          >
            <div className="phone-frame">
              <div className="phone-screen">
                {screenshots.map((src, index) => (
                  <img
                    key={index}
                    src={src}
                    alt={`ModernHealth screenshot ${index + 1}`}
                    className={index === current ? 'active' : ''}
                  />
                ))}
              </div>
              <div className="phone-notch"></div>
            </div>
          </div>
          <div className="slideshow-controls">
            <button onClick={prevSlide} aria-label="Previous screenshot">❮</button>
            <button onClick={nextSlide} aria-label="Next screenshot">❯</button>
          </div>
          <div className="slideshow-dots">
            {screenshots.map((_, index) => (
              <span
                key={index}
                className={`dot ${index === current ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to screenshot ${index + 1}`}
              ></span>
            ))}
          </div>
        </div>
      </section>

      <section className="cta">
        <h2>Transform Your Health Today</h2>
        <p>
          Understand what you eat, nourish your body, and thrive with ModernHealth’s AI-driven tools.
        </p>
        <a href="https://drive.google.com/file/d/1Go8N307BBLxFHYQ7Dw21R4tN7zs1qfy5/view" className="cta-button">
          Get Started
        </a>
      </section>
    </main>
  );
}

export default Home;