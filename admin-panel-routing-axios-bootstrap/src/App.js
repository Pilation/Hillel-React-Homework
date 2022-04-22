import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./components/Dashboard";
import Users from "./components/Users";
import Albums from "./components/Albums";
import Navigation from "./components/Navigation";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";

// Реализовать следующее приложение

// Вверху страницы есть три ссылки:dashboard, users, albums

// на странице dashboard находяться ссылки на альбомы и юзеров

// на странице юзеров вывести список всех юзеров и ссылочка на dashboard

// на странице альбомов - список альбомов и ссылочка на dashboard

// все делаем через роутер, кастомные хуки, сервисы и axios.

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/Dashboard" element={<Dashboard />} />
        </Routes>
        <Routes>
          <Route path="/users" element={<Users />} />
        </Routes>
        <Routes>
          <Route path="/albums" element={<Albums />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
