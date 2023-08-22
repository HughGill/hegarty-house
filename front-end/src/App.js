import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Intro from "./components/Intro";
import Images from "./components/Images";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Nav />
      <Intro />
      <Images />
      <Contact />
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/introduction" element={<Intro />}></Route>
        <Route path="/demo" element={<Images />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
