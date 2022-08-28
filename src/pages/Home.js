import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../style.css'

import NavBar from '../components/NavBar/NavBar';
import FullSizeVideo from '../components/FullSizeVideo/FullSizeVideo';
import CV from '../components/CV/CV';
import CardCarousel from '../components/CardCarousel/CardCarousel';
import projectList from "../components/Projects";
import Footer from '../components/Footer/Footer';
import HighlightProject from '../components/HighlightProject/HighlightProject';



const Home = () => {
    return(
        <>
        <NavBar />
        <FullSizeVideo />
        <CV />
        <HighlightProject projectList={projectList} project='Braun Parch'/>
        <HighlightProject projectList={projectList} project='Slide to Light'/>
        <HighlightProject projectList={projectList} project='Camera Slider'/>
        <CardCarousel projectList={projectList} title={'designProjectsTitle'}/>
        {/* <CardCarousel projectList={projectList}/>
        <CardCarousel projectList={projectList}/> */}
        <Footer />
        
        </>
    );
}

export default Home;