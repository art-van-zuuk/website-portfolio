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
const Posters = React.lazy(() => import("./pages/projects/Posters"));
const BraunParch = React.lazy(() => import("./pages/projects/BraunParch"));
const SlideToLight = React.lazy(() => import("./pages/projects/SlideToLight"));
const Chessboard = React.lazy(() => import("./pages/projects/Chessboard"));
const MARCHVII = React.lazy(() => import("./pages/projects/MARCHVII"));
const InputDevice = React.lazy(() => import("./pages/projects/InputDevice"));
const CameraSlider = React.lazy(() => import("./pages/projects/CameraSlider"));
const HANA = React.lazy(() => import("./pages/projects/HANA"));
const LaSelce = React.lazy(() => import("./pages/projects/LaSelce"));
const BandAidDispenser = React.lazy(() => import("./pages/projects/BandAidDispenser"));
const Speech = React.lazy(() => import("./pages/projects/Speech"));
const DustBuster = React.lazy(() => import("./pages/projects/DustBuster"));
const Lotus = React.lazy(() => import("./pages/projects/Lotus"));
const Sculp = React.lazy(() => import("./pages/projects/Sculp"));
const WeerwaterTrack = React.lazy(() => import("./pages/projects/WeerwaterTrack"));
// Insert project path above

// Companies
const MMID = React.lazy(() => import("./pages/company/MMID"));
const Spark = React.lazy(() => import("./pages/company/Spark"));
const Manometric = React.lazy(() => import("./pages/company/Manometric"));
const BBB = React.lazy(() => import("./pages/company/BBB"));
const Brabantia = React.lazy(() => import("./pages/company/Brabantia"));
const Tarnoc = React.lazy(() => import("./pages/company/Tarnoc"));
const Npk = React.lazy(() => import("./pages/company/npk"));
// Insert company path above

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
						path="posters"
						element={
							<React.Suspense fallback={<>...</>}>
								<Posters />
							</React.Suspense>
						}
					/>
					<Route
						path="sculp"
						element={
							<React.Suspense fallback={<>...</>}>
								<Sculp />
							</React.Suspense>
						}
					/>
					<Route
						path="lotus"
						element={
							<React.Suspense fallback={<>...</>}>
								<Lotus />
							</React.Suspense>
						}
					/>
					<Route
						path="weerwater-track"
						element={
							<React.Suspense fallback={<>...</>}>
								<WeerwaterTrack />
							</React.Suspense>
						}
					/>
					{/* Insert project route above */}

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
					<Route
						path="manometric"
						element={
							<React.Suspense fallback={<>...</>}>
								<Manometric />
							</React.Suspense>
						}
					/>
					<Route
						path="bbb"
						element={
							<React.Suspense fallback={<>...</>}>
								<BBB />
							</React.Suspense>
						}
					/>
					<Route
						path="Tarnoc"
						element={
							<React.Suspense fallback={<>...</>}>
								<Tarnoc />
							</React.Suspense>
						}
					/>
					<Route
						path="brabantia"
						element={
							<React.Suspense fallback={<>...</>}>
								<Brabantia />
							</React.Suspense>
						}
					/>
					<Route
						path="npk"
						element={
							<React.Suspense fallback={<>...</>}>
								<Npk />
							</React.Suspense>
						}
					/>
					{/* Insert company route above */}
				</Routes>
			</Router>
			<Footer />
		</>
	);
};

export default App;
