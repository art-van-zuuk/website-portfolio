import "./App.css";
import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = React.lazy(() => import("./pages/Home"));
const BraunParch = React.lazy(() => import("./pages/projects/BraunParch"));
const SlideToLight = React.lazy(() => import("./pages/projects/SlideToLight"));

const App = () => {
  return (
    ///Router to have multi-page setup
    <Router>
      <Routes>
        {/* Set Home.js as landing page */}
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
