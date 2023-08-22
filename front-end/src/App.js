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
      <Footer />
    </>
  );
}

export default App;
