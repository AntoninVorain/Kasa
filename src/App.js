import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home"
import About from "./pages/About"
import ErrorPageNotFound from "./pages/ErrorPageNotFound"
import "./App.scss"
import ApartmentPage from "./pages/ApartmentPage";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/flat" element={<ApartmentPage />} />
        <Route path="*" element={<ErrorPageNotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
