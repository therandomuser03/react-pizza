import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Find Your Perfect Hoodie</h1>
        <p>Discover the best hoodies to match your style and comfort.</p>
        <Link to="/products" className="hero-btn">
          Shop Now
        </Link>
      </div>
    </section>
  );
};

export default Hero;
