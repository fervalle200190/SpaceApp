import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import MainSpace from "./components/MainSpace";
import SizeProvider from "./context/sizeContext";

function App() {
     return (
          <SizeProvider>
               <Router>
                    <div className="whole-wrapper">
                         <MainSpace />
                    </div>
               </Router>
          </SizeProvider>
     );
}

export default App;
