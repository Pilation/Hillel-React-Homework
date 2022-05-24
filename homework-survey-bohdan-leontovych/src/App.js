// import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";

import LoginPage from "./pages/LoginPage";
import NotfoundPage from "./pages/NotfoundPage";
import SurveyPage from "./pages/SurveyPage/SurveyPage";
import RequireAuth from "./hoc/RequireAuth";
import AuthProvider from "./hoc/AuthProvider";
import ThankYouPage from "./pages/ThankYouPage";

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
          <Route path="thankyou" element={<ThankYouPage />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
