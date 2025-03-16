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

const Gallery = () => {
  const [category, setCategory] = useState('wedding'); // Default category

  return (
    <div>
      <Navbar />
      <div className="gallery-slide">
        <div>
          <Menu setCategory={setCategory} />
        </div>
        <div>
          <GallerySlide category={category} />
        </div>
      </div>
      <Testimonial />
      <More />
      <Footer />
    </div>
  );
};

export default Gallery;