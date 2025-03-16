// import React, { useState } from 'react';
// import { FaAngleLeft,  FaAngleRight} from 'react-icons/fa';
// import '../components/style.css';
// import Image1 from '../images/image 2.jpg';
// import Image2 from '../images/image-1.jpg';
// import Image3 from '../images/image-2.jpg';
// import Image4 from '../images/image-3.jpg';
// import Image5 from '../images/image-4.jpg';
// import Image6 from '../images/image 3.jpg';
// import { Hirebtntransparent } from '../components/buttons';

// const slides = [
//     {
//         title: "wedding",
//         image: Image1,
//     },
//     {
//         title: "wedding",
//         image: Image2,
//     },
//     {
//         image: Image3,
//         title: "wedding",
//     },
//     {
//         title: "wedding",
//         image: Image4,
//     },
//     {
//         title: "wedding",
//         image: Image5,
//     },
//     {
//         title: "wedding",
//         image: Image6,
//     }
// ]
// const GallerySlide = () => {
//     const [CurrentState, setCurrentState] = useState(0);
//     const nextSlide = () => {
//         setCurrentState((prev) => (prev + 1) % slides.length);
//     };
//     const prevSlide = () => {
//         setCurrentState((prev)=>
//         prev === 0 ? slides.length - 1 : prev - 1);
//     };
//     return (
//     <div className="gallerySlideSec">
//         <div className="slides">
//             <button className="prev-btn" onClick={prevSlide}><FaAngleLeft /></button>
//             <div className="slide">
//                 <img src={slides[CurrentState].image} alt={slides[CurrentState].title} />
//             </div>
//             <button className="next-btn" onClick={nextSlide}><FaAngleRight /></button>
//         </div>

//         <div className="bookbtn">
//             <Hirebtntransparent />
//         </div>
//     </div>
//   )
// }

// export default GallerySlide;


import React, { useState } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import '../components/style.css';
import { wedding, birthday, travel } from '../components/images';
import { Hirebtntransparent } from '../components/buttons';

const categories = { wedding, birthday, travel };

const GallerySlide = ({ selectedCategory }) => {
  const slides = categories[selectedCategory] || wedding; // Default to wedding if undefined
  const [currentState, setCurrentState] = useState(0);

  const nextSlide = () => {
    setCurrentState((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentState((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="gallerySlideSec">
      <div className="slides">
        <button className="prev-btn" onClick={prevSlide}><FaAngleLeft /></button>
        <div className="slide">
          <img src={slides[currentState].image} alt={selectedCategory} />
        </div>
        <button className="next-btn" onClick={nextSlide}><FaAngleRight /></button>
      </div>

      <div className="bookbtn">
        <Hirebtntransparent />
      </div>
    </div>
  );
};

export default GallerySlide;

