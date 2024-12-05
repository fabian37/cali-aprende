import img from "../../public/value-chain.jpg";

export function ValueChain() {
  return (
    <main className="app-container">
      <section>
        <h1>Cadena de Valor</h1>
        <div className="about__card">
          <img src={img} alt="Cadena de Valor" />
        </div>
      </section>
    </main>
  );
}
