// import React from 'react';
// import { Seemorebtn } from './buttons';
// import './style.css';

// const works = () => {
//   return (
//     <div className="worksSec">
//         <div className="worksHeading">
//             <h2>My <br/><span>Work</span></h2>
//             <p>Explore my portfolio featuring stunning photography, dynamic videography, and beautifully crafted albums. Each project showcases my dedication to capturing and preserving your most memorable moments.</p>
//         </div>
//         <div className="worksImg">
//             <div className="image1">
//             </div>
//             <div className="image2">
//             </div>
//             <div className="image3">
//             </div>
//             <div className="image4">
//                 <div className="image4Grid"></div>
//                 <div className="image4Grid"></div>
//                 <div className="image4Grid"></div>
//                 <div className="image4Grid"></div>
//                 <div className="image4Grid"></div>
//                 <div className="image4Grid"></div>
//             </div>
//             <div className="image5">
//                 <div className="image5GridS"></div>
//                 <div className="image5GridM"></div>
//                 <div className="image5GridS"></div>
//                 <div className="image5GridS"></div>
//                 <div className="image5GridL"></div>
//                 <div className="image5GridS"></div>
//             </div>
//             <div className="image-btm">
//                 <div className="image6"></div>
//                 <div className="image7"></div>
//             </div>
//         </div>
        
//         <Seemorebtn />
//     </div>
//   )
// }

// export default works

import React, { useState, useEffect } from 'react';
import { Seemorebtn } from './buttons';
import './style.css';
import { birthdayhighlight, birthdayZara, ProposalImages, TradAlex, TradZara, TradLeila, travelImages, whitewed } from "./images.js";

// Function to get a random image from an array
const getRandomImage = (images) => images[Math.floor(Math.random() * images.length)];

const Works = () => {
  const [randomImages, setRandomImages] = useState({
    workbday1: getRandomImage(birthdayhighlight),
    workbday2: getRandomImage(birthdayZara),
    workproposal: getRandomImage(ProposalImages),
    worktrad1: getRandomImage(TradAlex),
    worktrad2: getRandomImage(TradZara),
    worktrad3: getRandomImage(TradLeila),
    worktravel: getRandomImage(travelImages),
    workwhite: getRandomImage(whitewed),
  });

  // This effect will run once on page load to set the random images
  useEffect(() => {
    // No interval, just set the images once
  }, []);

  return (
    <div className="worksSec">
      <div className="worksHeading">
        <h2>My <br /><span>Work</span></h2>
        <p>Explore my portfolio featuring stunning photography, dynamic videography, and beautifully crafted albums. Each project showcases my dedication to capturing and preserving your most memorable moments.</p>
      </div>
      <div className="worksImg">
        <div className="workbday">
          <img src={randomImages.workbday1} alt="Birthday Highlight" />
        </div>
        <div className="workbday">
          <img src={randomImages.workbday2} alt="Birthday Zara" />
        </div>
        <div className="workproposal">
          <img src={randomImages.workproposal} alt="Proposal" />
        </div>
        <div className="worktrad1">
          <img src={randomImages.worktrad1} alt="Traditional Wedding Alex" />
        </div>
        <div className="worktrad2">
          <img src={randomImages.worktrad2} alt="Traditional Wedding Zara" />
        </div>
        <div className="worktrad3">
          <img src={randomImages.worktrad3} alt="Traditional Wedding Leila & Nasir" />
        </div>
        <div className="worktravel">
          <img src={randomImages.worktravel} alt="Travel" />
        </div>
        <div className="workwhite">
          <img src={randomImages.workwhite} alt="White Wedding" />
        </div>
      </div>

      <Seemorebtn />
    </div>
  );
};

export default Works;