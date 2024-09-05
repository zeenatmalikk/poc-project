import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import GridPage from "./pages/GridPage";
import ComingSoon from "./pages/ComingSoon";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path={"/"} element={<GridPage />} />
          {/* Catch-all route for any other path - render ComingSoon */}
          <Route path="*" element={<ComingSoon />} />{" "}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
