import React, { useEffect, useState } from "react";
import CrewOne from "../assets/crew/image-anousheh-ansari.png";
import CrewTwo from "../assets/crew/image-douglas-hurley.png";
import CrewThree from "../assets/crew/image-mark-shuttleworth.png";
import CrewFour from "../assets/crew/image-victor-glover.png";

const CrewPage = ({ crewDb, setCrewDb, crew }) => {
     const { name, role, bio } = crewDb;
     const [white, setWhite] = useState("crew 1");
     const handleChange = (ab) => {
          switch (ab) {
               case "crew 1":
                    setCrewDb(crew[0]);
                    setWhite("crew 1");
                    break;
               case "crew 2":
                    setCrewDb(crew[1]);
                    setWhite("crew 2");
                    break;
               case "crew 3":
                    setCrewDb(crew[2]);
                    setWhite("crew 3");
                    break;
               case "crew 4":
                    setCrewDb(crew[3]);
                    setWhite("crew 4");
                    break;
               default:
                    setCrewDb(crew[0]);
                    setWhite("crew 5");
                    break;
          }
     };
     useEffect(() => {
          return () => {
               setCrewDb(crew[0]);
          };
     }, []);
     return (
          <div className="crew-page">
               <h3 className="crew-main-title">
                    <b>02</b> meet your crew
               </h3>
               <div className="crew-container">
                    <div className="crew-member-details">
                         <div className="crew-selector">
                              <div className="crew-slider">
                                   <input
                                        type="radio"
                                        name="crew"
                                        id="crew-selector1"
                                        value={"crew 1"}
                                        className={``}
                                        onChange={(e) =>
                                             handleChange(e.target.value)
                                        }
                                   />
                                   <input
                                        type="radio"
                                        name="crew"
                                        id="crew-selector2"
                                        value={"crew 2"}
                                        onChange={(e) =>
                                             handleChange(e.target.value)
                                        }
                                   />
                                   <input
                                        type="radio"
                                        name="crew"
                                        id="crew-selector3"
                                        value="crew 3"
                                        onChange={(e) =>
                                             handleChange(e.target.value)
                                        }
                                   />
                                   <input
                                        type="radio"
                                        name="crew"
                                        id="crew-selector4"
                                        value={"crew 4"}
                                        onChange={(e) =>
                                             handleChange(e.target.value)
                                        }
                                   />
                                   <div className="crew-image image1">
                                        <img src={CrewTwo} alt="crew team" />
                                   </div>
                                   <div className="crew-image image2">
                                        <img src={CrewThree} alt="crew team" />
                                   </div>
                                   <div className="crew-image image3">
                                        <img src={CrewFour} alt="crew team" />
                                   </div>
                                   <div className="crew-image image4">
                                        <img src={CrewOne} alt="crew team" />
                                   </div>
                              </div>
                         </div>
                         <div className="inner-member-details">
                              <div className="crew-btn-container">
                                   <label
                                        htmlFor="crew-selector1"
                                        className={`slider-label ${
                                             white === "crew 1"
                                                  ? "active-slider"
                                                  : ""
                                        }`}
                                   ></label>
                                   <label
                                        htmlFor="crew-selector2"
                                        className={`slider-label ${
                                             white === "crew 2"
                                                  ? "active-slider"
                                                  : ""
                                        }`}
                                   ></label>
                                   <label
                                        htmlFor="crew-selector3"
                                        className={`slider-label ${
                                             white === "crew 3"
                                                  ? "active-slider"
                                                  : ""
                                        }`}
                                   ></label>
                                   <label
                                        htmlFor="crew-selector4"
                                        className={`slider-label ${
                                             white === "crew 4"
                                                  ? "active-slider"
                                                  : ""
                                        }`}
                                   ></label>
                              </div>
                              <div className="crew-info">
                                   <h4 className="crew-role">{role}</h4>
                                   <h3 className="crew-name">{name}</h3>
                                   <p className="crew-bio">{bio}</p>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default CrewPage;
