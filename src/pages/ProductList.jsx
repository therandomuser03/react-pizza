import React, { useContext } from 'react';
import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';
import Footer from '../components/Footer';

const ProductList = () => {
  return (
    <>
      <Navbar />
      <section className="product-list">
        {/* Map through products to display cards */}
      </section>
      <Footer />
    </>
  );
};

export default ProductList;
