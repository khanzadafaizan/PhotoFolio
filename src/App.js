import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./component/Header";
import PhotoFolio from "./component/PhotoFolio";
import "./css/main.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import About from "./about";
import Contact from "./contact";
import Gallery from "./gallery";
import Services from "./services";
import SampleInnerPage from "./sampleInnerPage";
import GallerySingle from "./gallerySingle";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PhotoFolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/services" element={<Services />} />
          <Route path="//gallerySingle" element={<GallerySingle /> } />
          <Route path="/sampleInnerPage" element={<SampleInnerPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
