import React, { useState, useEffect, useRef } from 'react';
import './App.css';

function App() {
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
    }, 5000);
    return () => clearInterval(timer);
  }, [screenshots.length]);

  const prevSlide = () => {
    setCurrent((current - 1 + screenshots.length) % screenshots.length);
  };

  const nextSlide = () => {
    setCurrent((current + 1) % screenshots.length);
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
    <div>
      <header>
        <h1>Your AI-Powered Health Coach</h1>
        <p>
          Track nutrition, get personalized recipes, and monitor fitness with smart AI insights.
        </p>
        <a href="#download">Download Now</a>
      </header>

      <section className="features">
        <h2>Why Choose Our App?</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <h3>Smart Nutrition Tracking</h3>
            <p>Analyze food photos or descriptions to estimate calories and nutrients using AI.</p>
          </div>
          <div className="feature-card">
            <h3>Personalized Recipes</h3>
            <p>Get healthy recipes tailored to your dietary preferences and health goals.</p>
          </div>
          <div className="feature-card">
            <h3>Fitness Monitoring</h3>
            <p>Track workouts and calories burned with real-time insights and summaries.</p>
          </div>
        </div>
      </section>

      <div
        className="slideshow"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {screenshots.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Screenshot ${index + 1}`}
            className={index === current ? 'active' : ''}
          />
        ))}
        <div className="slideshow-controls">
          <button onClick={prevSlide}>&#10094;</button>
          <button onClick={nextSlide}>&#10095;</button>
        </div>
      </div>

      <section className="cta">
        <h2>Start Your Health Journey Today</h2>
        <p>
          Join thousands of users who are eating smarter, cooking healthier, and staying active.
        </p>
        <a href="#download" id="download">Get Started</a>
      </section>

      <footer>
        <p>&copy; 2025 AI Health Coach. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;

