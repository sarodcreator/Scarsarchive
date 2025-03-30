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

import React from 'react';
import { Seemorebtn } from './buttons';
import './style.css';
import { birthdayhighlight, birthdayZara, ProposalImages, TradAlex, TradZara, TradLeila, travelImages, whitewed } from "./images.js";

const getRandomImages = (image) => images[Math.floor(Math.random() * images.length)]

const works = () => {
  return (
    <div className="worksSec">
        <div className="worksHeading">
            <h2>My <br/><span>Work</span></h2>
            <p>Explore my portfolio featuring stunning photography, dynamic videography, and beautifully crafted albums. Each project showcases my dedication to capturing and preserving your most memorable moments.</p>
        </div>
        <div className="worksImg">
            <div className="workbday">
            </div>
              <div className="workbday">
              </div>
            <div className="workproposal">
            </div>
            <div className="worktrad1">
            </div>
            <div className="worktrad2">
            
            </div>
            <div className="worktrad3">
                
            </div>
            <div className="worktravel">
                
            </div>
            <div className="workwhite">
                
            </div>
        </div>
        
        <Seemorebtn />
    </div>
  )
}

export default works