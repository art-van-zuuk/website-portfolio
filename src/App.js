import "./App.css";
import React, { useState, useMemo } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar/NavBar";
import MARCHVII from "./pages/designProjects/MARCHVII";
import Footer from "./components/Footer/Footer";
import InputDevice from "./pages/designProjects/InputDevice";
import CameraSlider from "./pages/designProjects/CameraSlider";
import HANA from "./pages/designProjects/HANA";
import LaSelce from "./pages/designProjects/LaSelce";
import WebsiteIOFestival from "./pages/graphicProjects/WebsiteIOFestival";
import OnLocked from "./pages/graphicProjects/OnLocked";
import BandAidDispenser from "./pages/designProjects/BandAidDispenser";

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
            path="camera-Slider"
            element={
              <React.Suspense fallback={<>...</>}>
                <CameraSlider />
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
          <Route
            path="website-iofestival"
            element={
              <React.Suspense fallback={<>...</>}>
                <WebsiteIOFestival />
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
      <Footer />
    </>
  );
};

export default App;
