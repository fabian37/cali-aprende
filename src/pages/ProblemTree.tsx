import tree from "../../public/problem-tree.png";

export function ProblemTree() {
  return (
    <main className="app-container">
      <section>
        <h1>Árbol del problema</h1>
        <div className="about__card">
          <img src={tree} alt="Árbol de problemas" />
        </div>
      </section>
    </main>
  );
}
