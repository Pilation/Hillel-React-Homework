import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Albums from "./pages/Albums";
import Users from "./pages/Users/Users";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="albums" element={<Albums />} />
          <Route path="users" element={<Users />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
