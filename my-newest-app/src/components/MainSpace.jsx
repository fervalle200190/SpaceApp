import axios from "axios";
import { useContext, useEffect, useMemo, useRef, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import CrewPage from "../pages/CrewPage";
import DestinationPage from "../pages/DestinationPage";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/HomePage";
import TechnologyPage from "../pages/TechnologyPage";
import HeaderSpace from "./HeaderSpace";
import { SizeContext } from "../context/sizeContext";
import BackgroundMob from "../assets/home/background-home-mobile.jpg";
import BackgroundMobDesti from "../assets/destination/background-destination-mobile.jpg";
import BackgroundMobCrew from "../assets/crew/background-crew-mobile.jpg";
import BackgroundMobTech from "../assets/technology/background-technology-mobile.jpg";
import BackgroundTab from "../assets/home/background-home-tablet.jpg";
import BackgroundTabDesti from "../assets/destination/background-destination-tablet.jpg";
import BackgroundTabCrew from "../assets/crew/background-crew-tablet.jpg";
import BackgroundTabTech from "../assets/technology/background-technology-tablet.jpg";
import BackgroundDesk from "../assets/home/background-home-desktop.jpg";
import BackgroundDeskDesti from "../assets/destination/background-destination-desktop.jpg";
import BackgroundDeskCrew from "../assets/crew/background-crew-desktop.jpg";
import BackgroundDeskTech from "../assets/technology/background-technology-desktop.jpg";

function MainSpace() {
     const [crew, setCrew] = useState(null);
     const [destination, setDestination] = useState(null);
     const [destiDb, setDestiDb] = useState(null);
     const [crewDb, setCrewDb] = useState(null);
     const [technology, setTechnology] = useState(null);
     const [technologyDb, setTechnologyDb] = useState(null);
     const [explore, setExplore] = useState("");
     const navigate = useNavigate();
     const [kinda, setKinda] = useState("");
     const { size, setSize } = useContext(SizeContext);
     const mainContainer = useRef();
     useEffect(() => {
          axios.get("https://fervalle200190.github.io/spaceapi/data.json").then(
               (response) => {
                    let res = response.data;
                    setCrew(res.crew);
                    setDestination(res.destinations);
                    setTechnology(res.technology);
               }
          );
          window.addEventListener("resize", () => {
               setSize(window.innerWidth);
          });
     }, [setSize]);
     const preload = useMemo(() => {
          let image = [
               BackgroundDesk,
               BackgroundTab,
               BackgroundMob,
               BackgroundDeskDesti,
               BackgroundDeskCrew,
               BackgroundMobDesti,
               BackgroundMobCrew,
               BackgroundDeskTech,
               BackgroundTabCrew,
               BackgroundTabDesti,
               BackgroundTabTech,
               BackgroundMobTech,
          ];
          let preloadImg = [];
          for (let i = 0; i < image.length; i++) {
               preloadImg[i] = new Image();
               preloadImg[i].src = image[i];
          }
          return preloadImg;
     }, []);
     useEffect(() => {
          const imageSelector = (ab) => {
               switch (ab) {
                    case "500 mob":
                         mainContainer.current.style.backgroundImage = `url(${preload[2].src})`;
                         break;
                    case "600 tab":
                         mainContainer.current.style.backgroundImage = `url(${preload[1].src})`;
                         break;
                    case "600 tab desti":
                         mainContainer.current.style.backgroundImage = `url(${preload[9].src})`;
                         break;
                    case "600 tab crew":
                         mainContainer.current.style.backgroundImage = `url(${preload[8].src})`;
                         break;
                    case "600 tab tech":
                         mainContainer.current.style.backgroundImage = `url(${preload[10].src})`;
                         break;
                    case "850 desk":
                         mainContainer.current.style.backgroundImage = `url(${preload[0].src})`;
                         break;
                    case "850 desk desti":
                         mainContainer.current.style.backgroundImage = `url(${preload[3].src})`;
                         break;
                    case "850 desk crew":
                         mainContainer.current.style.backgroundImage = `url(${preload[4].src})`;
                         break;
                    case "500 mob desti":
                         mainContainer.current.style.backgroundImage = `url(${preload[5].src})`;
                         break;
                    case "500 mob crew":
                         mainContainer.current.style.backgroundImage = `url(${preload[6].src})`;
                         break;
                    case "500 mob tech":
                         mainContainer.current.style.backgroundImage = `url(${preload[11].src})`;
                         break;
                    case "850 desk tech":
                         mainContainer.current.style.backgroundImage = `url(${preload[7].src})`;
                         break;
                    default:
                         break;
               }
          };
          if (size < 500 && size > 0) {
               if (kinda === "") {
                    imageSelector("500 mob");
                    return;
               }
               if (kinda === "destination") {
                    imageSelector("500 mob desti");
               }
               if (kinda === "crew") {
                    imageSelector("500 mob crew");
               }
               if (kinda === "technology") {
                    imageSelector("500 mob tech");
               }
          } else if (size >= 500 && size < 850) {
               if (kinda === "") {
                    imageSelector("600 tab");
                    return;
               }
               if (kinda === "destination") {
                    imageSelector("600 tab desti");
                    return;
               }
               if (kinda === "crew") {
                    imageSelector("600 tab crew");
                    return;
               }
               if (kinda === "technology") {
                    imageSelector("600 tab tech");
                    return;
               }
          } else if (size >= 850) {
               if (kinda === "") {
                    imageSelector("850 desk");
                    return;
               }
               if (kinda === "destination") {
                    imageSelector("850 desk desti");
                    return;
               }
               if (kinda === "crew") {
                    imageSelector("850 desk crew");
                    return;
               }
               if (kinda === "technology") {
                    imageSelector("850 desk tech");
                    return;
               }
          }
     }, [size, kinda, preload]);
     useEffect(() => {
          if (destination !== null) {
               setDestiDb(destination[0]);
          }
          if (crew !== null) {
               setCrewDb(crew[0]);
          }
          if (technology !== null) {
               setTechnologyDb(technology[0]);
          }
     }, [destination, crew, technology]);
     useEffect(() => {
          if (explore === "change") {
               navigate("/destination");
               setKinda("destination")
               setTimeout(() => {
                    setExplore("");
               }, 50);
          }
     }, [explore, navigate]);

     return (
          <div className={`main-container ${kinda}`} ref={mainContainer}>
               <HeaderSpace setKinda={setKinda} explore={explore} />
               <Routes>
                    <Route
                         path="/"
                         element={<HomePage setExplore={setExplore} />}
                    />
                    <Route
                         path="/destination"
                         element={
                              <DestinationPage
                                   destiDb={destiDb}
                                   setDestiDb={setDestiDb}
                                   destination={destination}
                              />
                         }
                    />
                    <Route
                         path="/crew"
                         element={
                              <CrewPage
                                   crew={crew}
                                   crewDb={crewDb}
                                   setCrewDb={setCrewDb}
                              />
                         }
                    />
                    <Route
                         path="/technology"
                         element={
                              <TechnologyPage
                                   technology={technology}
                                   technologyDb={technologyDb}
                                   setTechnologyDb={setTechnologyDb}
                              />
                         }
                    />
                    <Route path="*" element={<ErrorPage />} />
               </Routes>
          </div>
     );
}

export default MainSpace;
