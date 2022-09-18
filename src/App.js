import "./App.css";
import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import SlideToLight from "./pages/projects/SlideToLight";

// import Home from "./pages/Home.js";
// import BraunParch from "./pages/projects/BraunParch";

const Home = React.lazy(() => import("./pages/Home"));
const BraunParch = React.lazy(() => import("./pages/projects/BraunParch"));

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          index
          element={
            <React.Suspense fallback={<>...</>}>
              <Home />
            </React.Suspense>
          }
        />
        <Route
          path="braun-parch"
          element={
            <React.Suspense fallback={<>...</>}>
              <BraunParch />
            </React.Suspense>
          }
        />
        <Route
          path="slide-to-light"
          element={
            <React.Suspense fallback={<>...</>}>
              <SlideToLight />
            </React.Suspense>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
