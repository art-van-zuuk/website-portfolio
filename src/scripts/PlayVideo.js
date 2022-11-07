import React, { useRef, useLayoutEffect, useState } from "react";
import ReactPlayer from 'react-player';

function PlayVideo(props) {


  return (

    <div
      className={props.rounded ? "rounded-element" : ""}
      style={{ overflow: "hidden", width: "100%", aspectRatio: props.aspectRatio == null? "16/9" : props.aspectRatio}}
    >
      {/* <iframe
        style={{
          aspectRatio: props.aspectRatio == null ? "16/9" : props.aspectRatio,
        }}
        class="embed-responsive-item"
        id="ytplayer"
        type="text/html"
        src={
          "https://www.youtube.com/embed/" +
          props.video +
          "?&autoplay=1&loop=1&mute=1&rel=0&showinfo=0&color=white&iv_load_policy=3&playlist=" +
          props.video
        }
        frameborder="0"
        allowfullscreen
      ></iframe> */}


      <ReactPlayer 
        url={"https://www.youtube.com/embed/" + props.video}
        width = "100%"
        height= "100%"
        muted
        autoplay
        controls
        playing
        loop
      />

    </div>
  );
}

export default PlayVideo;
