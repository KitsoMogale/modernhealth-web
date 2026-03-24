import React, { useState, useEffect, useRef } from 'react';
import './App.css';

function Home() {
  const slides = [
    { src: '/Screenshot1.jpg', title: 'Home Dashboard', desc: 'See your health score, progress level, and daily overview at a glance.' },
    { src: '/Screenshot2.jpg', title: 'Meal Analysis', desc: 'Get a detailed breakdown of macronutrients, vitamins, and minerals for every meal.' },
    { src: '/Screenshot3.jpg', title: 'Nutrient Details', desc: 'Dive deep into vitamins, minerals, and special nutrients with AI-generated insights.' },
    { src: '/Screenshot4.jpg', title: 'Nutrient Deep Dive', desc: 'Learn what each nutrient does, how much you need, and get personalized AI comments.' },
    { src: '/Screenshot9.jpg', title: 'Log Your Meals', desc: 'Snap a photo or describe your meal — AI analyzes it instantly.' },
    { src: '/Screenshot5.jpg', title: 'Meal Suggestions', desc: 'Discover recipes tailored to your goals with health benefits and instructions.' },
    { src: '/Screenshot6.jpg', title: 'Cooking Guide', desc: 'Follow step-by-step instructions with ingredients, video tutorials, and more.' },
    { src: '/Screenshot7.jpg', title: 'Learning Path', desc: 'Master nutrition science topic by topic — from fundamentals to advanced concepts.' },
  ];

  const [current, setCurrent] = useState(0);
  const touchStartX = useRef(null);

  // Auto-play
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const prevSlide = () => {
    setCurrent((current - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrent((current + 1) % slides.length);
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
        <div className="hero-banner-bg">
          <img src="/ja584.jpg" alt="" className="hero-banner" />
        </div>
        <div className="hero-overlay"></div>

        <div className="hero-top">
          <img src="/mascot.png" alt="ModernHealth Mascot" className="hero-mascot" />
          <div className="hero-headline">
            <h1 className="hero-title">ModernHealth</h1>
            <p className="hero-tagline">You are what you eat — we help you understand it.</p>
          </div>
        </div>

        <div className="hero-content">
          <p className="hero-description">
            Track your diet and learn how food shapes your body with AI-powered insights and personalized nutrition plans.
          </p>
          <div className="hero-actions">
            <a href="https://play.google.com/store/apps/details?id=com.kitso.ModernHealth" className="cta-button" aria-label="Download ModernHealth app">
              <i className="fab fa-google-play"></i> Get it on Google Play
            </a>
            <a href="#features" className="cta-button-secondary" aria-label="Learn more about features">
              Learn More
            </a>
          </div>
          <div className="hero-stats">
            <div className="hero-stat">
              <span className="hero-stat-number">AI-Powered</span>
              <span className="hero-stat-label">Meal Analysis</span>
            </div>
            <div className="hero-stat-divider"></div>
            <div className="hero-stat">
              <span className="hero-stat-number">Personalized</span>
              <span className="hero-stat-label">Nutrition Plans</span>
            </div>
            <div className="hero-stat-divider"></div>
            <div className="hero-stat">
              <span className="hero-stat-number">Interactive</span>
              <span className="hero-stat-label">Health Lessons</span>
            </div>
          </div>
        </div>
      </header>

      <section className="features" id="features">
        <div className="features-header">
          <h2>Master Your Nutrition</h2>
          <p className="features-subtitle">Everything you need to understand, track, and improve what you eat.</p>
        </div>
        <div className="feature-grid">
          <div className="feature-card feature-card--has-image">
            <div className="feature-card-image">
              <img src="/featureImages/dietBody.jpg" alt="Woman eating a healthy meal" />
            </div>
            <div className="feature-card-body">
              <div className="feature-icon feature-icon--red">
                <i className="fas fa-heart"></i>
              </div>
              <h3>Diet-Body Connection</h3>
              <p>Explore how food impacts your cells, tissues, and organs with engaging, interactive lessons.</p>
            </div>
          </div>
          <div className="feature-card feature-card--has-image">
            <div className="feature-card-image">
              <img src="/featureImages/scanFood.jpg" alt="Scanning food with a phone camera" />
            </div>
            <div className="feature-card-body">
              <div className="feature-icon feature-icon--green">
                <i className="fas fa-leaf"></i>
              </div>
              <h3>AI Nutrition Tracking</h3>
              <p>Log meals or snap photos and let AI break down calories, macros, and micronutrients instantly.</p>
            </div>
          </div>
          <div className="feature-card feature-card--has-image">
            <div className="feature-card-image">
              <img src="/featureImages/mealPlans.jpg" alt="Cooking a healthy meal" />
            </div>
            <div className="feature-card-body">
              <div className="feature-icon feature-icon--orange">
                <i className="fas fa-utensils"></i>
              </div>
              <h3>Personalized Meal Plans</h3>
              <p>Get recipes and cooking ideas tailored to your dietary goals and preferences.</p>
            </div>
          </div>
          <div className="feature-card feature-card--has-image">
                        <div className="feature-card-image">
              <img src="/featureImages/learning.jpg" alt="Cooking a healthy meal" />
            </div>
            <div className="feature-card-body">
              <div className="feature-icon feature-icon--purple">
                <i className="fas fa-graduation-cap"></i>
              </div>
              <h3>Quizzes &amp; Learning</h3>
              <p>Test your nutrition knowledge with AI-generated quizzes and level up from noobie to expert.</p>
            </div>
          </div>
          <div className="feature-card feature-card--has-image">
            <div className="feature-card-image">
              <img src="/featureImages/AskAi.jpg" alt="Question and answer chat bubbles" />
            </div>
            <div className="feature-card-body">
              <div className="feature-icon feature-icon--blue">
                <i className="fas fa-comments"></i>
              </div>
              <h3>Ask AI Anything</h3>
              <p>Get instant answers to nutrition questions, recipe ideas, and health tips from your AI assistant.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="slideshow-section">
        <div className="slideshow-layout">
          <div className="slideshow-text">
            <h2>See It in Action</h2>
            <div className="slideshow-caption" key={current}>
              <span className="slideshow-caption-step">{current + 1} / {slides.length}</span>
              <h3 className="slideshow-caption-title">{slides[current].title}</h3>
              <p className="slideshow-caption-desc">{slides[current].desc}</p>
            </div>
            <div className="slideshow-nav">
              <button onClick={prevSlide} aria-label="Previous screenshot" className="slideshow-nav-btn">
                <i className="fas fa-chevron-left"></i>
              </button>
              <div className="slideshow-dots">
                {slides.map((_, index) => (
                  <span
                    key={index}
                    className={`dot ${index === current ? 'active' : ''}`}
                    onClick={() => goToSlide(index)}
                    aria-label={`Go to screenshot ${index + 1}`}
                  ></span>
                ))}
              </div>
              <button onClick={nextSlide} aria-label="Next screenshot" className="slideshow-nav-btn">
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>
          </div>

          <div
            className="slideshow"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            aria-label="ModernHealth app screenshots slideshow"
          >
            <div className="phone-frame">
              <div className="phone-screen">
                {slides.map((slide, index) => (
                  <img
                    key={index}
                    src={slide.src}
                    alt={slide.title}
                    className={index === current ? 'active' : ''}
                  />
                ))}
              </div>
              <div className="phone-notch"></div>
              <div className="power-button"></div>
              <div className="volume-up-button"></div>
              <div className="volume-down-button"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="cta-inner">
          <img src="/mascot.png" alt="ModernHealth Mascot" className="cta-mascot" />
          <div className="cta-content">
            <h2>Start Your Health Journey</h2>
            <p>
              Join thousands building healthier habits with AI-powered meal tracking, personalized plans, and interactive nutrition education.
            </p>
            <div className="cta-actions">
              <a href="https://play.google.com/store/apps/details?id=com.kitso.ModernHealth" className="cta-button">
                <i className="fab fa-google-play"></i> Download Free
              </a>
            </div>
            <div className="cta-perks">
              <span className="cta-perk"><i className="fas fa-check"></i> Free first try</span>
              <span className="cta-perk"><i className="fas fa-check"></i> No ads</span>
              <span className="cta-perk"><i className="fas fa-check"></i> Premium for full access</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;