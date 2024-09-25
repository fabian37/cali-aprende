import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { About } from "./pages/About";
import { Bibliography } from "./pages/Bibliography";
import { Home } from "./pages/Home";
import { StakeholderAnalysis } from "./pages/StakeholderAnalysis";
import { ProblemTree } from "./pages/ProblemTree";
import { ObjectivesTree } from "./pages/ObjectivesTree";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nosotros" element={<About />} />
          <Route
            path="/analisis-de-involucrados"
            element={<StakeholderAnalysis />}
          />
          <Route path="/arbol-del-problema" element={<ProblemTree />} />
          <Route path="/arbol-de-objetivos" element={<ObjectivesTree />} />
          <Route path="/bibliografia" element={<Bibliography />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
