import "./App.css";

import { Routes, Route } from "react-router-dom";

import Header from "./Pages/Components/Header/Header";
import Mouse from "./Mouseandprogress/Mouse";
import Prograss from "./Mouseandprogress/Prograss";

import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Services from "./Pages/Services/Services";
import FourZF from "./Pages/Components/Fourzfour/FourZF";
import Exp from "./Pages/Exparimant/Exp";
import Background from "./Pages/Components/Background/Background";
import HireMe from "./Pages/Hireme/HireMe";
import Protecte from "./ProtectedRoute/Protecte";
import HireContext from "./useContext/HireContext";
import ColorCheangedProvider from "./useContext/ColorContext";

function App() {
  return (
    <>
      <ColorCheangedProvider>
        <Header />
        <div className="app">
          <HireContext>
            <Background />
            <Prograss />
            <Mouse />
            <Routes>
              <Route path="/mdismailhosen/" element={<Home />} />
              <Route path="/mdismailhosen/about" element={<About />} />
              <Route path="/mdismailhosen/contact" element={<Contact />} />
              <Route path="/mdismailhosen/portfolio" element={<Portfolio />} />
              <Route path="/mdismailhosen/services" element={<Services />} />
              <Route path="/mdismailhosen/exp" element={<Exp />} />
              <Route
                path="/mdismailhosen/hireme"
                element={<Protecte Components={HireMe} />}
              />
              <Route path="*" element={<FourZF />} />
            </Routes>
          </HireContext>
        </div>
      </ColorCheangedProvider>
    </>
  );
}

export default App;
