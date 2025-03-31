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


import React, { useState, useEffect } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { 
    birthdayhighlight, birthdayZara, ProposalImages, TradAlex, TradZara, TradLeila, 
    travelImages, whitewed 
} from '../components/images';
import '../components/style.css';
import { Hirebtntransparent } from '../components/buttons';

const categoryMapping = {
    'birthday/highlight': birthdayhighlight,
    'birthday/zara': birthdayZara,
    'proposal': ProposalImages,
    'traditional/alex': TradAlex,
    'traditional/leila': TradLeila,
    'traditional/zara': TradZara,
    'white': whitewed,
    'travel': travelImages,
};

const GallerySlide = ({ category }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [slides, setSlides] = useState([]);

    // Update slides when category changes
    useEffect(() => {
        setSlides(categoryMapping[category] || []);
        setCurrentIndex(0); // Reset to first image when category changes
    }, [category]);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    return (
        <div className="gallerySlideSec">
            <div className="slides">
                <button className="prev-btn" onClick={prevSlide}><FaAngleLeft /></button>
                <div className="slide">
                    {slides.length > 0 ? (
                        <img src={slides[currentIndex]} alt="Gallery Slide" />
                    ) : (
                        <p>No images available</p>
                    )}
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