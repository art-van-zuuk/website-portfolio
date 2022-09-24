import "./App.css";
import React, { useState, useMemo } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar/NavBar";

const Home = React.lazy(() => import("./pages/Home"));
const BraunParch = React.lazy(() => import("./pages/designProjects/BraunParch"));
const SlideToLight = React.lazy(() =>
  import("./pages/designProjects/SlideToLight")
);
const Chessboard = React.lazy(() =>
  import("./pages/designProjects/Chessboard")
);
const Posters = React.lazy(() => import("./pages/graphicProjects/Posters"));

const TestCompany = React.lazy(() => import("./pages/company/TestCompany"));

const App = () => {

  return (
    <>
      <NavBar />
      {/* Router to have multi-page setup */}
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
          {/* Projects */}
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
          <Route
            path="chessboard"
            element={
              <React.Suspense fallback={<>...</>}>
                <Chessboard />
              </React.Suspense>
            }
          />

          <Route
            path="posters"
            element={
              <React.Suspense fallback={<>...</>}>
                <Posters />
              </React.Suspense>
            }
          />

          {/* Companies */}
          <Route
            path="test-company"
            element={
              <React.Suspense fallback={<>...</>}>
                <TestCompany />
              </React.Suspense>
            }
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;
