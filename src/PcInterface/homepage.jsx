import CanvasComponent from "./canvas.jsx";

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="text-div absolute flex justify-center items-center h-[84vh] font-Yeseva w-full tracking-[10px] pointer-events-none">
        <div className="text-behind absolute text-[50px] sm:text-[70px] md:text-[80px] lg:text-[120px] xl:text-[150px] 2xl:text-[180px] w-full flex justify-center items-center h-full text-white">
          humblefool13
        </div>
        <div className="text-stroked-infront absolute text-[50px] sm:text-[70px] md:text-[80px] lg:text-[120px] xl:text-[150px] 2xl:text-[180px] text-transparent z-[1] w-full flex justify-center items-center h-full">
          humblefool13
        </div>
      </div>
      <div className="homepage-container w-screen h-[85vh] flex z-0 justify-center items-center">
        <CanvasComponent />
      </div>
    </div>
  );
};

export default Homepage;
