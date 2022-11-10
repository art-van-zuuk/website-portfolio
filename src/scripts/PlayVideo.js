import ReactPlayer from 'react-player';

function PlayVideo(props) {


  return (
    <div
      className={props.rounded ? "rounded-element" : ""}
      style={{
        overflow: "hidden",
        width: "100%",
        aspectRatio: props.aspectRatio == null ? "16/9" : props.aspectRatio,
      }}
    >
      <ReactPlayer
        url={"https://www.youtube.com/embed/" + props.video}
        width="100%"
        height="100%"
        muted
        playing
        controls
        loop
      />
    </div>
  );
}

export default PlayVideo;
