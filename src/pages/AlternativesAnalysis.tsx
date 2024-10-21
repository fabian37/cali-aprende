import img from "../../public/alternatives-analysis.png";

export function AlternativesAnalysis() {
  return (
    <main className="app-container">
      <section>
        <h1>Análisis de Alternativas</h1>
        <div className="about__card">
          <img src={img} alt="Árbol de problemas" />
        </div>
      </section>
    </main>
  );
}
