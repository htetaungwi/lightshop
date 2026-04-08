import { BrowserRouter as Router,Routes,Route } from "react-router"
import Contact from "./Pages/Contact"
import Services from "./Pages/Services"
import Shops from "./Pages/Shops"
import Home from "./Pages/Home"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Outdoors from "./Pages/Outdoors"
import Indoor from "./Pages/Indoor"
import Nightlamp from "./Pages/Nightlamp"

function App() {
  return (
    <Router basename="/lightshop/">
      {<Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shops" element={<Shops />}/>
           <Route path="/outdoors" element={<Outdoors />} />
          <Route path="/indoor" element={<Indoor />} />
          <Route path="/nightlamp" element={<Nightlamp />} />

        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {<Footer />}
    </Router>
  );
}

export default App