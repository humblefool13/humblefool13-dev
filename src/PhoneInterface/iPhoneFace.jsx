import TopBezel from "./topBezel";
import Screen from "./screen";
import BottomPart from "./bottomPart";

const iPhoneFace = () => {
  return (
    <div className="iphone-face">
      <TopBezel />
      <Screen />
      <BottomPart />
    </div>
  );
};

export default iPhoneFace;
