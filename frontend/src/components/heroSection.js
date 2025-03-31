// import React, { useState } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import './style.css';
// import video1 from '../assets/videos/7395-200092380_small.mp4';
// import video2 from '../assets/videos/7374-199627560_small.mp4';
// import video3 from '../assets/videos/7374-199627560_small.mp4';
// import { Hirebtn, Downloadbtntransparent } from './buttons.js';

// const slides = [
//     {id: 1, videoUrl: video1, caption: "caption 1"},
//     {id: 2, videoUrl:  video2 , caption: "caption 2" },
//     {id: 3, videoUrl:  video3 , caption: "caption 3" },
// ];

// const HeroSection = () => {
//     const [activeIndex,  setActiveIndex] = useState(0);
//   return (
//     <div className="hero-sec">
//         <div className="hero-dt">
//               <h1 className="hero-title">Scar's<br />Archive</h1>
//               <p className="hero-d">Digital Storyteller</p>
//         </div>
//           <div className="swiper-style">
//             <Swiper
//                 modules={[]}
//                 spaceBetween={20}
//                 slidesPerView={3}
//                 centeredSlides={true}
//                 loop={false}
//                 autoplay={false}
//                 onSlideChange={(swiper) => 
//                     setActiveIndex(swiper.realIndex)
//                 }
//             >
//                 {slides.map((slide, index) => (
//                     <SwiperSlide key={slide.id}>
//                         <div className={`video-container ${index === activeIndex ? "active" : "inactive"}`}>
//                             <video src={slide.videoUrl}  loop muted />
//                             <p>{slide.caption}</p>
//                         </div>
//                     </SwiperSlide>
//                 ))}
//             </Swiper>
//         </div>
//         <div className="hero-btns">
//             <Hirebtn />
//             <Downloadbtntransparent />
//         </div>
//     </div>
//   )
// }

// export default HeroSection

import React, { useState, useEffect } from 'react';
import Navbar from './navbar';
import './style.css';
import { Hirebtn, Downloadbtntransparent } from './buttons.js';
import { birthdayhighlight, birthdayZara, ProposalImages, TradAlex, TradZara, TradLeila, travelImages, whitewed } from "./images.js";

// Group all image categories together (excluding icons)
const allImages = [
    ...birthdayhighlight,
    ...birthdayZara,
    ...ProposalImages,
    ...TradAlex,
    ...TradZara,
    ...TradLeila,
    ...travelImages,
    ...whitewed
];

const getRandomImages = (count) => {
    let selected = [];
    for (let i = 0; i < count; i++) {
        selected.push(allImages[Math.floor(Math.random() * allImages.length)]);
    }
    return selected;
};

const HeroSection = () => {
    const [randomImages, setRandomImages] = useState([]);

    useEffect(() => {
        setRandomImages(getRandomImages(12)); // 12 images for 12 hex divs
    }, []);

    return (
        <div className="hero">
            <Navbar />
            <div className="hero-sec">
                <div className="hero-dt">
                    <h1 className="hero-title">Scar's Archive</h1>
                    <p className="hero-d">Digital Storyteller</p>
                    <div className="hero-btns">
                        <Hirebtn />
                        <Downloadbtntransparent />
                    </div>
                </div>
                <div className='hero-img-sec'>
                    <div className="hero-imgs">
                        {randomImages.slice(0, 4).map((img, index) => (
                            <div className="hex" key={index}>
                                <img src={img} alt={`Hex Image ${index + 1}`} />
                            </div>
                        ))}
                    </div>
                    <div className="hero-imgs block">
                        {randomImages.slice(4, 8).map((img, index) => (
                            <div className="hex" key={index + 4}>
                                <img src={img} alt={`Hex Image ${index + 5}`} />
                            </div>
                        ))}
                    </div>
                    <div className="hero-imgs block">
                        {randomImages.slice(8, 12).map((img, index) => (
                            <div className="hex" key={index + 8}>
                                <img src={img} alt={`Hex Image ${index + 9}`} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeroSection;