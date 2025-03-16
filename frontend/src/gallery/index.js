/*import React from 'react';
import './index.css';
import Navbar from '../components/navbar';
import GallerySlide from './galleryslide';
import Menu from './menu';
import Testimonial from './review';
import More from './moreWorks';
import Footer from '../components/footer';

const index = () => {
  return (
    <div>
      <Navbar />
      <div className="gallery-slide">
        <div>
          <Menu />
        </div>
        <div>
          <GallerySlide />
        </div>
      </div>
      <Testimonial />
      <More />
      <Footer />
    </div>
  )
}

export default index;
*/
import React, { useState } from 'react';
import './index.css';
import Navbar from '../components/navbar';
import GallerySlide from './galleryslide';
import Menu from './menu';
import Testimonial from './review';
import More from './moreWorks';
import Footer from '../components/footer';

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState('wedding'); // Default category

  // Handle category change
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);

    // Smooth scroll to gallery section
    document.querySelector('.gallery-slide').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <Navbar />
      <div className="gallery-slide">
        <div>
          <Menu onCategoryChange={handleCategoryChange} />
        </div>
        <div>
          <GallerySlide selectedCategory={selectedCategory} />
        </div>
      </div>
      <Testimonial />
      <More />
      <Footer />
    </div>
  );
};

export default Index;