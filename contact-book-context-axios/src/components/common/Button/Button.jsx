import "./style.css";
import { useContext } from "react";
import ThemeContext from "../../../context/ThemeContext";

export default function Button({ value, onClick }) {
  const { theme } = useContext(ThemeContext);
  if (onClick) {
    return (
      <button
        className="ContactBookButton"
        onClick={() => onClick()}
        style={theme.variables}
      >
        {value}
      </button>
    );
  } else {
    return (
      <button className="ContactBookButton" style={theme.variables}>
        {value}
      </button>
    );
  }
}
