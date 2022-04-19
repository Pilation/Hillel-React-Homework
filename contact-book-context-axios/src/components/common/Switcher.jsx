import { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";

export default function ContactSwitcher() {
  const { toggle } = useContext(ThemeContext);
  return (
    <label className="theme-switcher">
      <input type="checkbox" onChange={() => toggle()} />
      <span></span>
    </label>
  );
}
