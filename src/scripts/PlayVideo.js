function PlayVideo(props) {

  return (
    <div
      className={props.rounded ? "rounded-element" : ""}
      style={{ overflow: "hidden" }}
    >
      <iframe
        style={{aspectRatio: props.aspectRatio == null? '16/9' : props.aspectRatio}}
        src={
          "https://www.youtube.com/embed/" +
          props.video +
          "?controls=1&mute=1&showinfo=0&rel=0&autoplay=1&loop=1&playlist=" +
          props.video
        }
        // allow="autoplay; encrypted-media"
        allowFullScreen
        title="video"
      />
    </div>
  );


}

export default PlayVideo;
