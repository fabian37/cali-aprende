import "./About.css";

export function About() {
  return (
    <main className="app-container">
      <section className="about__section">
        <h1 className="about__title">Presentación integrantes</h1>
        <article className="about__card">
          <iframe
            className="about__card-video"
            src="https://www.youtube.com/embed/QVY2jLJJnnw"
            title="Cali Aprende: Recursos para un Futuro Mejor"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </article>
      </section>
    </main>
  );
}
