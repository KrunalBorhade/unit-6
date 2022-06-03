import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { Home } from "./Components/Home";
import { AddCountry } from "./Components/addCountry";
import { AddCity } from "./Components/addCity";

function App() {
  return (
    <div className="App">
      <Link to="/"><h3>Home</h3></Link> <br />
      <Link to="/add-country"><h4>AddCountry</h4></Link> <br /> <br />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-country" element={<AddCountry />} />
        <Route path="/add-city" element={<AddCity />} />
      </Routes>
    </div>
  );
}

export default App;