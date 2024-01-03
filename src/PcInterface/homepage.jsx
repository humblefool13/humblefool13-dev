import CanvasComponent from "./canvas.jsx";

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="text-div" style={{ pointerEvents: "none" }}>
        <div className="text-behind">humblefool13</div>
        <div className="text-stroked-infront">humblefool13</div>
      </div>
      <div className="homepage-container">
        <CanvasComponent />
      </div>
    </div>
  );
};

export default Homepage;
