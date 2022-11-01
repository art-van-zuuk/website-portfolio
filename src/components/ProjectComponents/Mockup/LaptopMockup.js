

function LaptopMockup(props) {


    // var width = "1000px";
    // var imageWidth = 800;
    // var imageHeight = 480;
    // var height = ((width / imageHeight) * imageWidth).toString + "px";
    // console.log(height);

    return (
      <div
        style={{
          width: "700px",
          padding: "50px",
          backgroundColor: "red",
        }}
      >
        <img
          alt="Mockup"
          draggable="false"
          src={"/images/Projects/" + props.project + "/" + props.image}
          style={{
            position: "absolute",
            height: "300px",
            width: "500px",
            overflow: "hidden",
          }}
        ></img>
        <div
          style={{
            position: "absolute",
            height: "200px",
            width: "400px",
            backgroundColor: "blue",
            overflowY: "scroll",
          }}
        >
          <img
            alt="Mockup"
            draggable="false"
            src={"/images/Projects/" + props.project + "/" + props.image}
            style={{ width: "100%", overflow: "hidden" }}
          ></img>
        </div>
      </div>
    );
}

export default LaptopMockup;
