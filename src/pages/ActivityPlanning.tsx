import img from "../../public/ActivityPlanning.jpg";

export function ActivityPlanning() {
  return (
    <main className="app-container">
      <section>
        <h1>Planificación de actividades</h1>
        <div className="about__card">
          <img src={img} alt="Planificación de actividades" />
        </div>
      </section>
    </main>
  );
}
