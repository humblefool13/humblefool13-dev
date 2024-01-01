import { Canvas } from "@react-three/fiber";

import Kong from "../assets/kong.png";
import Scroller from "../assets/scroll-bar.png";

const Homepage = () => {
  const textBehind = document.getElementById("text-behind");
  const textFront = document.getElementById("text-front");
  const textBehindBlur = document.getElementById("text-behind-blur");
  const canvasRect = document.getElementById("canvas");

  const parallaxScaling1 = 0.0005;
  const parallaxScaling2 = 0.00025;
  const parallaxScaling3 = 0.0000001;

  let currentScroll = 0;
  let targetScroll = 0;
  let ease = 0.001;

  let theta1 = 0;

  function updateScale() {
    let rect = canvasRect.getBoundingClientRect();

    let startScrollPosition = window.pageYOffset + rect.top;
    let endScrollPosition = window.pageYOffset + rect.bottom;

    if (
      targetScroll + window.innerHeight < startScrollPosition ||
      targetScroll > endScrollPosition
    ) {
      return;
    }

    currentScroll += (targetScroll - currentScroll) * ease;

    let scaleValue1 = 1 + currentScroll * parallaxScaling1;
    let scaleValue2 = 1 + currentScroll * parallaxScaling2;

    textBehind.style.transform = `scale(${scaleValue1})`;
    textFront.style.transform = `scale(${scaleValue1})`;
    textBehindBlur.style.transform = `scale(${scaleValue1})`;
    canvasRect.style.transform = `scale(${scaleValue2})`;

    theta1 += currentScroll * parallaxScaling3;
    setTimeout(updateScale, 1000 / 60);
  }

  window.addEventListener("scroll", () => {
    targetScroll = window.pageYOffset;
    updateScale();
  });

  updateScale();

  return (
    <div>
      <div class="headline-container">
        <div id="text-behind">
          Builder Grinder
          <br />
          Learner Dreamer
        </div>
        <div id="text-behind-blur">
          Builder Grinder
          <br />
          Learner Dreamer
        </div>
        <div id="text-front">
          Builder Grinder
          <br />
          Learner Dreamer
        </div>
      </div>
      <div className="canvas-container">
        <canvas id="canvas"></canvas>
      </div>
      <div className="scroll-icon">
        <img src={Scroller} alt="scroll down"></img>
      </div>
      <div className="me-section details">
        <div className="me-pic-kong">
          <img src={Kong} alt="My cyberkongz"></img>
        </div>
        <div className="me-intro-text">
          <div className="intro-text-heading">Meet Bo! aka humblefool13</div>
          <div className="intro-para">
            I'm a Creative and Curious individual with a passion for
            problem-solving. Driven by goals, I approach challenges with
            enthusiasm and an analytical mindset. My ambition fuels innovation,
            and I thrive in collaborative environments. Open-minded and always
            seeking new horizons, I bring a blend of creativity and strategic
            thinking to every project.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
