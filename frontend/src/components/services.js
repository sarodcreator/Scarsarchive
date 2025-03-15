import React from 'react';
import ServiceCard from './serviceCard';
import './style.css';
import Image1 from "../images/image 1.png";
import Image2 from "../images/image.png";
import Image3 from "../images/image-1.png";

const service = [
    {
        title: "Photography",
        desc: "Capturing authentic and timeless images that tell your story, from life’s big celebrations to everyday moments.",
        image: Image1,
        caption: 'photography',
    },
    {
        title: "Videography",
        desc: "Bringing your memories to life through cinematic films, designed to capture every emotion, sound, and detail.",
        image: Image2,
        caption: 'videography',
    },
    {
        title: "Album Creation",
        desc: "Crafting beautifully designed, professional photo albums that become treasured keepsakes, allowing you to relive your moments for generations to come.",
        image: Image3,
        caption: 'albums',
    },
]

const services = () => {
  return (
    <div className="servicesSec">
      <div className="services">
        <h1>Services</h1>
        <p>
          In today’s rapidly evolving digital world, everything is transitioning
          to online platforms and digital spaces. But here’s the reality:
          computers don’t last forever. Your hard drive won’t be something you
          pass down through generations. What will stand the test of time,
          though? That beautiful photo album from your photographer. As life’s
          seasons change, and your family grows and ages, it’s that tangible
          keepsake that will endure, preserving your memories for years to come.
          
          <br/><br/>When your photographer delivers a stunning online gallery, you know
          those beautiful images deserve to be brought to life. But here’s the
          truth: creating a breathtaking photo album is a time-consuming
          process. Most busy families don’t have the luxury of dedicating hours
          to crafting the perfect keepsake. That’s why investing in a
          professionally made album is such a valuable option.
        </p>
      </div>
      {service.slice(0, 3).map((item, index) => (
        <ServiceCard
          key={index}
          title={item.title}
          desc={item.desc}
          image={item.image}
          caption={item.caption}
          className={index === 2 ? "highlight" : ""}
        />
      ))}
    </div>
  );
}

export default services;