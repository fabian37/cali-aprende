import img from "../../public/analisis-de-prefactibilidad.png";

export function PrefeasibilityAnalysis() {
  return (
    <main className="app-container">
      <section>
        <h1>Análisis de Prefactibilidad</h1>
        <div className="about__card">
          <img src={img} alt="Análisis de prefactibilidad" />
        </div>
      </section>
    </main>
  );
}
