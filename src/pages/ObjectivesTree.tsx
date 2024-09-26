import "./StakeholderAnalysis.css";
import obj from "../../public/obj-tree.png";

export function ObjectivesTree() {
  return (
    <main className="app-container">
      <section>
        <h1>Árbol de objetivos</h1>
        <div className="about__card">
          <img src={obj} alt="Árbol de objetivos" />
        </div>
      </section>
    </main>
  );
}
