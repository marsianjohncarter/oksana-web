import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import About from "./pages/about";
import ContactForm from "./pages/contact";

 
function App() {
  return (
    <>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />}></Route>
      <Route path="/contact" element={<ContactForm />}></Route>
      <Route path='*' element={<Home />}/>
    </Routes>
    
    </>
  );
}

export default App;
