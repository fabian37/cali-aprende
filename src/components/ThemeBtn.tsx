import "./ThemeBtn.css";

export function ThemeBtn() {
  const handlerTheme = () => {
    const body = document.querySelector("body");
    body?.classList.toggle("light-theme");
  };
  return (
    <label className="switch">
      <input type="checkbox" onClick={handlerTheme} />
      <span className="slider"></span>
    </label>
  );
}
