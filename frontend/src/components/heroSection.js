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

import React from 'react';
import Image1 from '../images/image-1.jpg';
import Navbar from './navbar';
import './style.css';
import { Hirebtn, Downloadbtntransparent } from './buttons.js';

const block1 = [
    { id: 1, img: Image1, alt: "image 1" },
    { id: 2, img: Image1, alt: "image 2" },
    { id: 3, img: Image1, alt: "image 3" },
    { id: 4, img: Image1, alt: "image 4" },
]
const block2 = [
    { id: 5, img: Image1, alt: "image 5" },
    { id: 6, img: Image1, alt: "image 6" },
    { id: 7, img: Image1, alt: "image 7" },
    { id: 8, img: Image1, alt: "image 8" },
    { id: 9, img: Image1, alt: "image 9" },
]
const block3 = [
    { id: 10, img: Image1, alt: "image 10" },
    { id: 11, img: Image1, alt: "image 11" },
    //{ id: 12, img: Image1, alt: "image 12" },
]

const HeroSection = () => {
    
    return (
        <div className="hero">
            <Navbar />
            <div className="hero-sec">
                <div className="hero-dt">
                    <h1 className="hero-title">Scar's{/*<br />*/} Archive</h1>
                    <p className="hero-d">Digital Storyteller</p>
                    <div className="hero-btns">
                        <Hirebtn />
                        <Downloadbtntransparent />
                    </div>
                </div>
                <div className='hero-img-sec'>
                    <div className="hero-imgs">
                        {block1.map((item) => (
                            <div className="hex" key={item.id}>
                                <img src={item.img} alt={item.desc} />
                            </div>
                        ))}
                    </div>
                    <div className="hero-imgs block">
                        {block2.map((item) => (
                            <div className="hex" key={item.id}>
                                <img src={item.img} alt={item.desc} />
                            </div>
                        ))}
                    </div>
                    <div className="hero-imgs block">
                        {block3.map((item) => (
                            <div className="hex" key={item.id}>
                                <img src={item.img} alt={item.desc} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection