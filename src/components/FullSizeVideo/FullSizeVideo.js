import React from 'react';
import { batch, Fade, MoveOut, Animator, ScrollContainer, ScrollPage, Sticky, StickyIn, StickyOut, ZoomIn, FadeIn, Move, ZoomOut } from 'react-scroll-motion';

import video from './C0007.MP4'

import '../../style.css'
import './FullSizeVideo.css'

const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
const FadeUp = batch(Fade(), Sticky(), MoveOut(0, -300));

const FullSizeVideo = () => {
    return (
        <ScrollContainer>
            <div className='videoContainer'>
                <video src={video} autoPlay loop muted />
            </div>
            <ScrollPage page={0} className="align-items-center justify-content-center">
                <Animator animation={batch(StickyIn(), Fade(), Move())}>
                    <h2 className='white-text'>A portfolio</h2>
                    <h4 className='white-text handwritten'>By Art van Zuuk</h4>
                </Animator>
            </ScrollPage>

            <ScrollPage page={1}>
                <Animator animation={batch(StickyIn(), Fade(), Move())}>
                    <h3 className='white-text'>Dear VanMoof</h3>
                    <h4 className='white-text'>This is my portfolio website.</h4>
                </Animator>
            </ScrollPage>

            <ScrollPage page={2}>
            </ScrollPage>
            
        </ScrollContainer>



    );
}

export default FullSizeVideo; 