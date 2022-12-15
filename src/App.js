import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";

import "./App.css";

// This page is loaded when index.js
// Here all pages are lazy loaded (only loads when page is opened) and initialized for routing (page opens in new URL)
// How to: When adding new directory page to website, add lazy load initialization 

// Initialize lazy load pages
const Home = React.lazy(() => import("./pages/Home"));

// Design Projects
const BraunParch = React.lazy(() => import("./pages/designProjects/BraunParch"));
const SlideToLight = React.lazy(() => import("./pages/designProjects/SlideToLight"));
const Chessboard = React.lazy(() => import("./pages/designProjects/Chessboard"));
const MARCHVII = React.lazy(() => import("./pages/designProjects/MARCHVII"));
const InputDevice = React.lazy(() => import("./pages/designProjects/InputDevice"));
const CameraSlider = React.lazy(() => import("./pages/designProjects/CameraSlider"));
const HANA = React.lazy(() => import("./pages/designProjects/HANA"));
const LaSelce = React.lazy(() => import("./pages/designProjects/LaSelce"));
const BandAidDispenser = React.lazy(() => import("./pages/designProjects/BandAidDispenser"));
const Speech = React.lazy(() => import("./pages/designProjects/Speech"));
const DustBuster = React.lazy(() => import("./pages/designProjects/DustBuster"));

// Graphic Projects
const Posters = React.lazy(() => import("./pages/graphicProjects/Posters"));
const OnLocked = React.lazy(() => import("./pages/graphicProjects/OnLocked"));

// Companies
const MMID = React.lazy(() => import("./pages/company/MMID"));
const Spark = React.lazy(() => import("./pages/company/Spark"));

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
            path="march-vii"
            element={
              <React.Suspense fallback={<>...</>}>
                <MARCHVII />
              </React.Suspense>
            }
          />
          <Route
            path="input-device"
            element={
              <React.Suspense fallback={<>...</>}>
                <InputDevice />
              </React.Suspense>
            }
          />
          <Route
            path="la-selce"
            element={
              <React.Suspense fallback={<>...</>}>
                <LaSelce />
              </React.Suspense>
            }
          />
          <Route
            path="hana"
            element={
              <React.Suspense fallback={<>...</>}>
                <HANA />
              </React.Suspense>
            }
          />
          <Route
            path="band-aid-dispenser"
            element={
              <React.Suspense fallback={<>...</>}>
                <BandAidDispenser />
              </React.Suspense>
            }
          />
          <Route
            path="camera-slider"
            element={
              <React.Suspense fallback={<>...</>}>
                <CameraSlider />
              </React.Suspense>
            }
          />
          <Route
            path="speech"
            element={
              <React.Suspense fallback={<>...</>}>
                <Speech />
              </React.Suspense>
            }
          />
          <Route
            path="dust-buster"
            element={
              <React.Suspense fallback={<>...</>}>
                <DustBuster />
              </React.Suspense>
            }
          />

          <Route
            path="onlocked"
            element={
              <React.Suspense fallback={<>...</>}>
                <OnLocked />
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
            path="mmid"
            element={
              <React.Suspense fallback={<>...</>}>
                <MMID />
              </React.Suspense>
            }
          />
          <Route
            path="spark"
            element={
              <React.Suspense fallback={<>...</>}>
                <Spark />
              </React.Suspense>
            }
          />
        </Routes>
      </Router>
      <Footer />
    </>
  );
};

export default App;
