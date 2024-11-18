import tree1 from "../../public/tree-problems_1.jpg";
import tree2 from "../../public/tree-problems_2.jpg";

export function ProblemTree() {
  return (
    <main className="app-container">
      <section>
        <h1>Árbol del problema</h1>
        <div className="about__card">
          <img src={tree1} alt="Árbol de problemas parte 1" />
        </div>
        <div className="about__card">
          <img src={tree2} alt="Árbol de problemas parte 2" />
        </div>
      </section>
    </main>
  );
}
