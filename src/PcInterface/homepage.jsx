import CanvasComponent from "./canvas.jsx";

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="text-div">
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
