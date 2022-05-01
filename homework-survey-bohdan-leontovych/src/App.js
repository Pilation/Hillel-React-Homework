// import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";

import LoginPage from "./pages/LoginPage";
import NotfoundPage from "./pages/NotfoundPage";
import SurveyPage from "./pages/SurveyPage/SurveyPage";
import RequireAuth from "./hoc/RequireAuth";
import AuthProvider from "./hoc/AuthProvider";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <RequireAuth>
                <SurveyPage />
              </RequireAuth>
            }
          />
          <Route path="login" element={<LoginPage />} />
          <Route path="*" element={<NotfoundPage />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
