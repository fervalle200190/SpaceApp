import React, { useState } from "react";

const HomePage = ({ setExplore }) => {
     const [show, setShow] = useState("");
     const handleMouse = () => {
          if (show === "") {
               setShow("togray");
          } else {
               setShow("");
          }
     };
     return (
          <div className="home-page">
               <div className="inner-page">
                    <h1 className="home-title">So, you want to travel to</h1>
                    <b className="huge-word">Space</b>
                    <p className="home-info">
                         Let’s face it; if you want to go to space, you might as
                         well genuinely go to outer space and not hover kind of
                         on the edge of it. Well sit back, and relax because
                         we’ll give you a truly out of this world experience!
                    </p>
               </div>
               <div className="explore-container">
                    <div className={`hover-circle ${show}`}>
                         <label htmlFor="menu-option">
                              <div
                                   className="white-circle"
                                   onMouseEnter={handleMouse}
                                   onMouseLeave={handleMouse}
                                   onClick={() => setExplore("change")}
                              >
                                   <h2>Explore</h2>
                              </div>
                         </label>
                    </div>
               </div>
          </div>
     );
};

export default HomePage;
