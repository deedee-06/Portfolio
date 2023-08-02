import About from "./components/About";
import Home from "./components/Home"
import Navbar from "./components/Navbar";
import Work from "./components/Work";
import Skills from "./components/skills";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
       <Navbar />
       <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
    </div>
  );
  
}

export default App;


