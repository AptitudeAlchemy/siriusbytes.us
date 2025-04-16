import "./App.css";
import './js/index';
import HomePage from "./pages/HomePage";


function App() {
  return (
    <div>
      <span className="particle-grad-sm-r particle-grad"></span>
      <span
        className="particle-grad-rg-l particle-grad"
        // style={{ top: "25%" }}
      ></span>
      <HomePage />
    </div>
  );
}

export default App;
