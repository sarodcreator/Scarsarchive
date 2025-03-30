import React from 'react';
import './style.css';
import { FaArrowRight, FaDownload } from 'react-icons/fa';

export const Hirebtn = () => {
  return (
    <div>
        <button className="btn fill">
            Book Now
            <FaArrowRight />
        </button>
    </div>
  )
};

export const HireBtnw = () => {
  return (
    <div>
        <button className="btn trans-white">
            Book Now
            <FaArrowRight />
        </button>
    </div>
  )
};

export const Downloadbtn = () => {
    return (
        <div>
            <button className="btn trans-white">
                Download Resume
                <FaDownload />
            </button>
        </div>
    )
};

export const Hirebtntransparent = () => {
    return (
        <div>
            <button className="btn transparent">
                Book Now
                <FaArrowRight />
            </button>
        </div>
    )
};

export const Downloadbtntransparent = () => {
    return (
        <div>
            <button className="btn transparent">
                Download Resume
                <FaDownload />
            </button>
        </div>
    )
};

export const Seemorebtn = () => {
    return (
        <div>
            <button className="btn transparent">
                See More
                <FaArrowRight />
            </button>
        </div>
    )
};

export const Sendbtn = () => {
    return (
        <div>
            <button className="btn fill" type="submit">
                SEND MESSAGE
            </button>
        </div>
    )
};
