import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { About } from "./pages/About";
// import { Bibliography } from "./pages/Bibliography";
import { Home } from "./pages/Home";
import { StakeholderAnalysis } from "./pages/StakeholderAnalysis";
import { ProblemTree } from "./pages/ProblemTree";
import { ObjectivesTree } from "./pages/ObjectivesTree";
import { AlternativesAnalysis } from "./pages/AlternativesAnalysis";
import { PrefeasibilityAnalysis } from "./pages/PrefeasibilityAnalysis";
import { LogicalFrameworkMatrix } from "./pages/LogicalFrameworkMatrix";
import { ActivityPlanning } from "./pages/ActivityPlanning";
import { ValueChain } from "./pages/ValueChain";
import { BudgetModel } from "./pages/BudgetModel";

function App() {
  console.log("Qué haces aquí? 🤨");
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
          <Route
            path="/analisis-de-alternativas"
            element={<AlternativesAnalysis />}
          />
          <Route
            path="/analisis-de-prefactibilidad"
            element={<PrefeasibilityAnalysis />}
          />
          <Route
            path="/matriz-de-marco-logico"
            element={<LogicalFrameworkMatrix />}
          />
          <Route
            path="/planificacion-de-actividades"
            element={<ActivityPlanning />}
          />
          <Route path="/cadena-de-valor" element={<ValueChain />} />
          <Route path="/modelo-de-presupuestos" element={<BudgetModel />} />
          {/* <Route path="/bibliografia" element={<Bibliography />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
