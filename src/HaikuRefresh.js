import HaikuCreator from "./HaikuCreator";
// import google from "googlethis";


function HaikuRefresh() {
  
//   const image = google.search(wordSearch);

  return (
    <div
      style={{
        color: "darkblue",
      }}
    >
      <div
        style={{
          textAlign: "center",
          backgroundColor: "lightblue",
          border: "2px solid darkblue",
        }}
      >
        <h1>h[AI]ku</h1>
        <h3>by</h3>
        <h3>Jeff Horner</h3>
      </div>
      <br />
      <div
        style={{
          position: "relative",
          left: "20px",
          paddingLeft: "30px",
          paddingTop: "10px",
          paddingBottom: "10px",
          border: "2px solid darkblue",
          borderRadius: "10px",
          width: "50%",
          backgroundColor: "lightblue",
        }}
      >
        <HaikuCreator />
        {/* <img src={image} /> */}
      </div>
    </div>
  );
}
export default HaikuRefresh;
