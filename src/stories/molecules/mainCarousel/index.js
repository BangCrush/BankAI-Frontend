import MediumButton from "stories/atoms/mediumButton";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MainCarousel = ({ data }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <Slider className="shadow-custom w-490 mx-auto rounded-20" {...settings}>
      {data.map((a, i) => {
        return (
          <div className="border-1 border-solid border-gray-border bg-white rounded-20 px-20 py-12 max-y-215">
            <p className="text-black-900 text-16 font-semibold mb-10">
              {data[i].prodName}
            </p>
            <p className="text-gray-900 text-12 mb-10">
              {data[i].prodType} {data[i].accCode}
            </p>
            <p className="text-black-900 text-26 font-extrabold mb-30">
              {data[i].accBalance.toLocaleString()}원
            </p>
            <div className="grid grid-cols-2 gap-x-15 justify-center mb-10">
              <MediumButton text={"조회하기"}></MediumButton>
              <MediumButton text={"이체하기"} sub={true}></MediumButton>
            </div>
          </div>
        );
      })}
    </Slider>
  );
};

export default MainCarousel;
