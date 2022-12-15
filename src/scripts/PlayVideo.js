import ReactPlayer from 'react-player';
import PropTypes from 'prop-types'

//Function that shows video  
function PlayVideo({video, rounded = false, aspectRatio = '16/9', controls = true}) {

  return (
    <div
      className={rounded ? "rounded-element" : ""}
      style={{
        overflow: "hidden",
        width: "100%",
        aspectRatio: aspectRatio,
      }}
    >
      <ReactPlayer
        url={"https://www.youtube.com/embed/" + video}
        width="100%"
        height="100%"
        muted
        playing
        controls = {controls}
        loop
      />
    </div>
  );
}

// Decribe variable type and required
PlayVideo.propTypes = {
  video: PropTypes.string.isRequired,
  rounded: PropTypes.bool,
  aspectRatio: PropTypes.string,
  controls: PropTypes.bool,
}

export default PlayVideo;
