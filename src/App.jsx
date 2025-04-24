import { Outlet } from "react-router-dom";

import "./App.css";
import "./js/index";
import Header from "./components/Header";
import SideMenu from "./components/SideMenu";
import MobileHeader from "./components/MobileHeader";
import Footer from "./components/Footer";
function App() {
  const screenWidth = screen.width;

  return (
    <>
      <span className="particle-grad-sm-r particle-grad"></span>
      <span
        className="particle-grad-rg-l particle-grad"
        // style={{ top: "25%" }}
      ></span>
      {screenWidth >= 1080 ? <Header /> : <MobileHeader />}
      {screenWidth < 1080 ? <SideMenu /> : <></>}
      <div
        style={{ backgroundColor: "var(--white-glass)", paddingTop: screenWidth <= 1080 ? "7.5rem" : "0" }}
      >
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
