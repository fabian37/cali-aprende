import "./Footer.css";

export function Footer() {
  const date = new Date();
  return (
    <footer className="footer">
      <div>Derechos reservados Cali Aprende - {date.getFullYear()}</div>
    </footer>
  );
}
