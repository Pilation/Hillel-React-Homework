import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./components/Dashboard";
import Users from "./components/Users";
import Albums from "./components/Albums";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="users" element={<Users />} />
          <Route path="albums" element={<Albums />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
