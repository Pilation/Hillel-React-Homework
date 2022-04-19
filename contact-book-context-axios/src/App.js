import ContactBook from "./components/ContactBook/ContactBook";

import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <ContactBook />
    </ThemeProvider>
  );
}

export default App;
