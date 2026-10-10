
import { Routes, Route } from "react-router-dom";

import Header_component from "./components/Header_component";
import Footer_component from "./components/Footer_component";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <div>
      <Header_component />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <h1>My first React app</h1>
      <h4>Created by Spandana </h4>

      <Footer_component />
    </div>
  );
}

export default App;
