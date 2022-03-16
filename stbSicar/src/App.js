import "./App.css";
import { Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact/Contact";
import NosFonds from "./pages/Nos fonds/NosFonds";
import News from "./pages/News/News";
import HomeNews from "./components/HomeNews";
import Homepage from "./pages/Homepage/Homepage";
// import Test from "./pages/Test";
import Navbar from "./components/navabar/navbar";
import Footer from "./components/Footer/Footer";
import ResponsabilitéSocial from "./pages/Responsabilité/ResponsabilitéSocial";
import Connaitre from "./pages/Nous Connaitre/Connaitre";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="contact" element={<Contact />} />
        <Route path="nosfonds" element={<NosFonds />} />
        <Route path="news" element={<News />} />
        <Route path="homeNews" element={<HomeNews />} />
        {/* <Route path="test" element={<Test />} /> */}
        <Route path="nousconnaitre" element={<Connaitre />} />
        <Route path="representationsocial" element={<ResponsabilitéSocial />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
