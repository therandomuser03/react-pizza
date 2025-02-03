import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <section className="featured-products">
        {/* Add featured product cards later */}
      </section>
      <Footer />
    </>
  );
};

export default Home;
