import "./Bibliography.css";

export function Bibliography() {
  return (
    <main className="app-container">
      <section>
        <h1>Bibliografía</h1>
        <div className="fuente">
          <span className="fuente__autor">Mordor Intelligence. (s. f.).</span>
          <span className="fuente__titulo">
            {" "}
            Mercado de lubricantes automotrices de colombia análisis de tamaño y
            participación tendencias de crecimiento y pronósticos hasta 2026.
          </span>
          <span className="fuente__referencia">
            {" "}
            https://www.mordorintelligence.com/es/industry-reports/colombia-automotive-lubricants-market
          </span>
        </div>
      </section>
    </main>
  );
}
