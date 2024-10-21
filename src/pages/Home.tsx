import { Link } from "react-router-dom";
import hero from "../../public/hero.jpg";
import "./Home.css";

export function Home() {
  return (
    <main className="app-container">
      <section className="hero">
        <h1 className="hero__title">
          Cali Aprende{" "}
          <span className="hero__title--detail">
            Recursos Para Un Futuro Mejor
          </span>
        </h1>
        <p>
          Estamos comprometidos con el acceso equitativo a la educación para
          todos los niños y niñas de nuestra ciudad. Creemos que cada estudiante
          merece contar con las herramientas necesarias para aprender y crecer,
          sin importar sus circunstancias económicas.
        </p>
        <Link to="/nosotros" className="hero__button">
          Conoce nuestro equipo
        </Link>
        <img className="hero__background" src={hero} alt="Cali Aprende" />
      </section>
    </main>
  );
}
