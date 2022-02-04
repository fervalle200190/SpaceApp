import React, { useEffect, useRef, useState } from "react";
import Logo from "../assets/shared/logo.svg";
import Hamburger from "../assets/shared/icon-hamburger.svg";
import Close from "../assets/shared/icon-close.svg";
import { useNavigate } from "react-router-dom";

const HeaderSpace = ({ setKinda, explore }) => {
     const [menu, setMenu] = useState("close");
     const [section, setSection] = useState("home");
     const input = useRef();
     const menuCont = useRef();
     const burger = useRef();
     const navigate = useNavigate();
     const handleMenu = () => {
          if (menu === "close") {
               setMenu("show");
               document.querySelector("body").style.overflow = "hidden"
          } else {
               setMenu("close");
               document.querySelector("body").style.overflow = "auto"
          }
     };
     const handleKinda = (db)=> {
          setKinda(db)
          setMenu("close")
          document.querySelector("body").style.overflow = "auto"
     }
     useEffect(() => {
          switch (section) {
               case "home":
                    navigate("/");
                    break;
               case "destination":
                    navigate("/destination");
                    break;
               case "crew":
                    navigate("/crew");
                    break;
               case "technology":
                    navigate("/technology");
                    break;
               default:
                    navigate("/");
                    break;
          }
     }, [section, navigate]);
     useEffect(() => {
       document.querySelector("body").addEventListener("click",(e)=> {
            if(e.target !== menuCont.current && e.target !== burger.current) {
                 setMenu("close")
               document.querySelector("body").style.overflow = "auto"
            }
       })
     }, []);
     useEffect(() => {
     }, [explore]);
     
     return (
          <header className="header-container">
               <div className="inner-header-container">
                    <div className="logo-container">
                         <img src={Logo} alt="logo" />
                    </div>
                    <div className="line-desk"></div>
                    <div className="options-to-do">
                         <ul className={`ul-container ${menu}`} ref={menuCont}>
                              <li className="close-icon">
                                   <img
                                        src={Close}
                                        alt="close"
                                        onClick={handleMenu}
                                   />
                              </li>
                              <li className="inner-li">
                                   <label>
                                        <input
                                             type="radio"
                                             name="menu"
                                             id="menu-options"
                                             className="desktop-underline"
                                             defaultChecked
                                             value={"home"}
                                             onChange={(e) => {
                                                  setSection(e.target.value);
                                             }}
                                             onClick={()=> {
                                                  handleKinda("")
                                             }}
                                        />
                                        <span className="white-underline"></span>
                                        <b>00</b> Home
                                   </label>
                              </li>
                              <li>
                                   <label>
                                        <input
                                             type="radio"
                                             name="menu"
                                             id="menu-option"
                                             className="desktop-underline"
                                             value={"destination"}
                                             onChange={(e) =>{
                                                  setSection(e.target.value)
                                             }}
                                             onClick={()=> handleKinda("destination")}
                                             ref={input}
                                        />
                                        <span className="white-underline"></span>
                                        <b>01</b> Destination
                                   </label>
                              </li>
                              <li>
                                   <label>
                                        <input
                                             type="radio"
                                             name="menu"
                                             id="menu-options"
                                             className="desktop-underline"
                                             value={"crew"}
                                             onChange={(e) =>
                                                  setSection(e.target.value)
                                             }
                                             onClick={()=> handleKinda("crew")}
                                        />
                                        <span className="white-underline"></span>
                                        <b>02</b> Crew
                                   </label>
                              </li>
                              <li>
                                   <label>
                                        <input
                                             type="radio"
                                             name="menu"
                                             id="menu-options"
                                             className="desktop-underline"
                                             value="technology"
                                             onChange={(e) =>
                                                  setSection(e.target.value)
                                             }
                                             onClick={()=> handleKinda("technology")}
                                        />
                                        <span className="white-underline"></span>
                                        <b>03</b> Technology
                                   </label>
                              </li>
                         </ul>
                         <div className="menu-container">
                              <img
                                   src={Hamburger}
                                   alt="hamburger"
                                   onClick={handleMenu}
                                   ref={burger}
                              />
                         </div>
                    </div>
               </div>
          </header>
     );
};

export default HeaderSpace;
