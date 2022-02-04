import React, { useEffect } from "react";
import Moon from "../assets/destination/image-moon.png";
import Mars from "../assets/destination/image-mars.png";
import Europa from "../assets/destination/image-europa.png";
import Titan from "../assets/destination/image-titan.png";

const DestinationPage = ({ destiDb, setDestiDb, destination }) => {
     const { name, description, distance, travel } = destiDb;
     const planet = () => {
          switch (name) {
               case "Moon":
                    return Moon;
               case "Mars":
                    return Mars;
               case "Europa":
                    return Europa;
               case "Titan":
                    return Titan;
               default:
                    break;
          }
     };
     const handleChange = (db) => {
          switch (db) {
               case "moon":
                    setDestiDb(destination[0]);
                    break;
               case "mars":
                    setDestiDb(destination[1]);
                    break;
               case "europa":
                    setDestiDb(destination[2]);
                    break;
               case "titan":
                    setDestiDb(destination[3]);
                    break;
               default:
                    break;
          }
     };
     useEffect(() => {
          return () => {
               setDestiDb(destination[0]);
          };
     }, []);

     return (
          <div className="destination-container">
               <h3 className="main-destination-title">
                    <b>01</b> pick your destination
               </h3>
               <div className="dest-main-container">
                    <div className="image-desti-cont">
                         <img src={planet()} alt="planet" />
                    </div>
                    <div className="details-container">
                         <div className="inner-one-details">
                              <div className="select-planets">
                                   <div className="planet-option">
                                        <label>
                                             <input
                                                  type="radio"
                                                  name="planet"
                                                  id="planet-radio"
                                                  defaultChecked
                                                  value={"moon"}
                                                  onChange={(e) =>
                                                       handleChange(
                                                            e.target.value
                                                       )
                                                  }
                                             />
                                             <div className="planet-underline"></div>
                                             Moon
                                        </label>
                                   </div>
                                   <div className="planet-option">
                                        <label>
                                             <input
                                                  type="radio"
                                                  name="planet"
                                                  id="planet-radio"
                                                  value={"mars"}
                                                  onChange={(e) =>
                                                       handleChange(
                                                            e.target.value
                                                       )
                                                  }
                                             />
                                             <div className="planet-underline"></div>
                                             Mars
                                        </label>
                                   </div>
                                   <div className="planet-option">
                                        <label>
                                             <input
                                                  type="radio"
                                                  name="planet"
                                                  id="planet-radio"
                                                  value={"europa"}
                                                  onChange={(e) =>
                                                       handleChange(
                                                            e.target.value
                                                       )
                                                  }
                                             />
                                             <div className="planet-underline"></div>
                                             Europa
                                        </label>
                                   </div>
                                   <div className="planet-option">
                                        <label>
                                             <input
                                                  type="radio"
                                                  name="planet"
                                                  id="planet-radio"
                                                  value={"titan"}
                                                  onChange={(e) =>
                                                       handleChange(
                                                            e.target.value
                                                       )
                                                  }
                                             />
                                             <div className="planet-underline"></div>
                                             Titan
                                        </label>
                                   </div>
                              </div>
                              <h4 className="planet-title">{name}</h4>
                              <p className="planet-description">
                                   {description}
                              </p>
                         </div>
                         <div className="inner-details-cont">
                              <div>
                                   <h5>avg. distance</h5>
                                   <p>{distance}</p>
                              </div>
                              <div>
                                   <h5>est. travel time</h5>
                                   <p>{travel}</p>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default DestinationPage;
