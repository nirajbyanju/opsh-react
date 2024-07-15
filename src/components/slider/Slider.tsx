import { Carousel } from 'react-responsive-carousel';
import sildingImg from '@/assets/auth/sildingImg.png';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./slider.scss";

const SliderComponent = () => {
  return (
    <div>
      <Carousel
        className="relative w-full flex flex-row justify-center"
        infiniteLoop
        emulateTouch={true}
        showArrows={false}
        interval={3000}
        showThumbs={false}
        showStatus={false}
      >
        <div className="relative overflow-hidden rounded-lg">
          <img src={sildingImg} className="block w-full h-full object-cover" alt="Slide" />
        </div>
        <div className="relative overflow-hidden rounded-lg">
          <img src={sildingImg} className="block w-full h-full object-cover" alt="Slide" />
        </div>
        <div className="relative overflow-hidden rounded-lg">
          <img src={sildingImg} className="block w-full h-full object-cover" alt="Slide" />
        </div>
        <div className="relative overflow-hidden rounded-lg">
          <img src={sildingImg} className="block w-full h-full object-cover" alt="Slide" />
        </div>
      </Carousel>
    </div>
  );
}

export default SliderComponent;
