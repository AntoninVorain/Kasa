import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home"
import About from "./pages/About"
import ErrorPageNotFound from "./pages/ErrorPageNotFound"
import "./App.scss"
import ApartmentPage from "./pages/ApartmentPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/flat" element={<ApartmentPage />} />
        <Route path="*" element={<ErrorPageNotFound />} />
      </Routes>
    </BrowserRouter> 
  );
}

export default App;
