import React from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'

import NavBar from './components/NavBar/NavBar';
import FullSizeVideo from './components/FullSizeVideo/FullSizeVideo';
import CV from './components/CV/CV';
import CardCarousel from './components/CardCarousel/CardCarousel';
import projectList from "./components/Projects";
import Footer from './components/Footer/Footer';
import HighlightProject from './components/HighlightProject/HighlightProject';



const App = () => {
    return(
        <>
        <NavBar />
        <FullSizeVideo />
        <CV />
        <HighlightProject />
        <CardCarousel projectList={projectList}/>
        <Footer />
        
        </>
    );
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App tab="home" />);