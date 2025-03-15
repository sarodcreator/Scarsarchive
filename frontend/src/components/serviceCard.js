import React from 'react';
import './style.css';

const serviceCard = ({title, desc, image, caption}) => {
  return (
    <div className="serviceCard">
        <h2>{title}</h2>
        <p>{desc}</p>
        <div>
            <img src={image} alt={caption} />
        </div>
    </div>
  )
}

export default serviceCard;