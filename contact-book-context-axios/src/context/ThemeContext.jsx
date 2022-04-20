import { createContext, useState, useLayoutEffect } from "react";

const ThemeContext = createContext({});
export default ThemeContext;

export function ThemeProvider(props) {
  const darkTheme = {
    title: "darkTheme",
    variables: {
      ["--background"]: "#000000cc",
      ["--main"]: "#fff",
      ["--buttonBackground"]: "#565656",
      ["--buttonText"]: "#fff",
    },
  };

  const lightTheme = {
    title: "lightTheme",
    variables: {
      ["--background"]: "#fff",
      ["--main"]: "#000000cc",
      ["--buttonBackground"]: "#fa8072",
      ["--buttonText"]: "#fff",
    },
  };
  const [theme, setTheme] = useState(lightTheme);
  useLayoutEffect(() => {
    applyTheme(theme);
  }, [theme]);

  const applyTheme = (theme) => {
    const inlineTheme = Object.entries(theme.variables)
      .map((e) => e.join(": "))
      .join(";");
    const root = document.getElementById("root");
    root.style.cssText = inlineTheme;
  };

  const toggle = () => {
    setTheme((curr) =>
      curr.title === "lightTheme" ? (curr = darkTheme) : (curr = lightTheme)
    );
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggle,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
}
