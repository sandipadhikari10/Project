import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import ExecutiveBoard from "./pages/Dropdowns/ExecutiveBoard";
import News from "./pages/News";
import Advisors from "./pages/Dropdowns/Advisors";
import GeneralMember from "./pages/Dropdowns/GeneralMember";
import PastPresident from "./pages/Dropdowns/PastPresident";
import WestCoast from "./pages/Dropdowns/WestCoast";
import Events from "./pages/Events";
import Footer2 from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/events" element={<Events />} />
        <Route path="/news" element={<News />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Executive-Board" element={<ExecutiveBoard />} />
        <Route path="/Advisors" element={<Advisors />} />
        <Route path="/General-Members" element={<GeneralMember />} />
        <Route path="/Past-President" element={<PastPresident />} />
        <Route path="/RCC-West-Coast-Region" element={<WestCoast />} />
      </Routes>
      <Footer2 />
    </>
  );
}

export default App;
