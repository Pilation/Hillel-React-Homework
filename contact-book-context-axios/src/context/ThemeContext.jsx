import { createContext, useState, useLayoutEffect } from "react";

const ThemeContext = createContext({});

export default ThemeContext;

export function ThemeProvider(props) {
  // keeps state of the current chosen theme
  const [dark, setDark] = useState(window.localStorage.getItem("darkTheme"));

  console.log(dark);
  // paints the app before it renders elements
  useLayoutEffect(() => {
    const lastTheme = window.localStorage.getItem("darkTheme");

    if (lastTheme === "true") {
      setDark(true);
      applyTheme(darkTheme);
    }

    if (!lastTheme || lastTheme === "false") {
      setDark(false);
      applyTheme(lightTheme);
    }
    // if state changes, repaints the app
  }, [dark]);

  const applyTheme = (theme) => {
    const root = document.getElementsByTagName("html")[0];
    root.style.cssText = theme.join(";");
  };

  const toggle = () => {
    setDark(!dark);
    window.localStorage.setItem("darkTheme", !dark);
  };

  return (
    <ThemeContext.Provider
      value={{
        dark,
        toggle,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
}

// styles
const lightTheme = [
  "--background: #fff",
  "--main: #000000cc",
  "--buttonBackground: #fa8072",
  "--buttonText: #fff",
];

const darkTheme = [
  "--background: #000000cc",
  "--main: #fff",
  "--buttonBackground: #565656",
  "--buttonText: #fff",
];

// const light = {
//   title: "light",
//   color: "#000",
//   backgroundColor: "#fff",
//   border: "1px solid #000",
// };
// const dark = {
//   title: "dark",
//   color: "#fff",
//   backgroundColor: "#000000cc",
//   border: "1px solid #fff",
// };

// const ToggleTheme = () => {
//   setTheme((curr) =>
//     curr.title === "light" ? (curr = dark) : (curr = light)
//   );
// };
