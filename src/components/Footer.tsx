import "./Footer.css";

export function Footer() {
  const date = new Date();
  return (
    <footer className="footer">
      <div>Derechos reservados Aprende-Cali - {date.getFullYear()}</div>
    </footer>
  );
}
