import React, { useContext, useEffect, useState } from "react";
import Launch from "../assets/technology/image-launch-vehicle-landscape.jpg";
import LaunchDesk from "../assets/technology/image-launch-vehicle-portrait.jpg";
import Capsule from "../assets/technology/image-space-capsule-landscape.jpg";
import CapsuleDesk from "../assets/technology/image-space-capsule-portrait.jpg";
import Space from "../assets/technology/image-spaceport-landscape.jpg";
import SpaceDesk from "../assets/technology/image-spaceport-portrait.jpg";
import { SizeContext } from "../context/sizeContext";

const TechnologyPage = ({ technologyDb, setTechnologyDb, technology }) => {
     const { name, description } = technologyDb;
     const [travel, setTravel] = useState("travel 1");
     const { size } = useContext(SizeContext);
     const imageSec = (ab) => {
          switch (ab) {
               case "launch":
                    if (size > 1050) {
                         return LaunchDesk;
                    } else {
                         return Launch;
                    }
               case "capsule":
                    if (size > 1050) {
                         return CapsuleDesk;
                    } else {
                         return Capsule;
                    }
               case "space":
                    if (size > 1050) {
                         return SpaceDesk;
                    } else {
                         return Space;
                    }
               default:
                    return;
          }
     };
     const handleChange = (e) => {
          switch (e.target.value) {
               case "planet 1":
                    setTravel("travel 1");
                    setTechnologyDb(technology[0]);
                    break;
               case "planet 2":
                    setTravel("travel 2");
                    setTechnologyDb(technology[1]);
                    break;
               case "planet 3":
                    setTravel("travel 3");
                    setTechnologyDb(technology[2]);
                    break;
               default:
                    setTravel("travel 1");
                    break;
          }
     };
     useEffect(() => {
          return () => {
               setTechnologyDb(technology[0]);
          };
     }, []);

     return (
          <div className="technology-container">
               <h3 className="tech-main-title">
                    {" "}
                    <b>03</b> space launch 101
               </h3>
               <div className="tech-flex-container">
                    <div className="tech-main-container">
                         <div className="main-cont-slider-tech">
                              <div className="slider-tech">
                                   <input
                                        type="radio"
                                        name="tech-slider"
                                        id="tech-input1"
                                        value={"planet 1"}
                                        onChange={(e) => handleChange(e)}
                                   />
                                   <input
                                        type="radio"
                                        name="tech-slider"
                                        id="tech-input2"
                                        value={"planet 2"}
                                        onChange={(e) => handleChange(e)}
                                   />
                                   <input
                                        type="radio"
                                        name="tech-slider"
                                        id="tech-input3"
                                        value={"planet 3"}
                                        onChange={(e) => handleChange(e)}
                                   />

                                   <div className="tech-slide-img first-tech">
                                        <img
                                             src={imageSec("launch")}
                                             alt="launch"
                                        />
                                   </div>
                                   <div className="tech-slide-img">
                                        <img
                                             src={imageSec("capsule")}
                                             alt="capsule"
                                        />
                                   </div>
                                   <div className="tech-slide-img">
                                        <img
                                             src={imageSec("space")}
                                             alt="space"
                                        />
                                   </div>
                              </div>
                         </div>
                    </div>
                    <div className="tech-details-cont">
                         <div className="image-selector-tech">
                              <label
                                   htmlFor={`tech-input1`}
                                   className={`${
                                        travel === "travel 1"
                                             ? "planet-white"
                                             : ""
                                   }`}
                              >
                                   1
                              </label>
                              <label
                                   htmlFor={`tech-input2`}
                                   className={`${
                                        travel === "travel 2"
                                             ? "planet-white"
                                             : ""
                                   }`}
                              >
                                   2
                              </label>
                              <label
                                   htmlFor={`tech-input3`}
                                   className={`${
                                        travel === "travel 3"
                                             ? "planet-white"
                                             : ""
                                   }`}
                              >
                                   3
                              </label>
                         </div>
                         <div className="deep-details-tech">
                              <h3 className="the-title">the therminology...</h3>
                              <h4 className="the-vehicle">{name}</h4>
                              <h4 className="the-explanation">{description}</h4>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default TechnologyPage;
