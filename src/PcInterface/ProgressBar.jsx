const ProgressBar = ({ width, height, progress }) => {
  return (
    <div
      className={"bg-lime-600 rounded-3xl flex items-center"}
      style={{
        width: `${width}vw`,
        height: `${height}vh`,
      }}
    >
      <div
        className={`bg-[#ffeb3b] rounded-3xl items-center mx-[1%]`}
        style={{
          width: `${100 * progress}%`,
          height: "60%",
        }}
      >
        &nbsp;
      </div>
    </div>
  );
};

export default ProgressBar;
