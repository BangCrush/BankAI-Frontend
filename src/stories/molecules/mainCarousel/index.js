import MediumButton from "stories/atoms/mediumButton";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { productTypeMapping } from "constants/products";
import { Link } from "react-router-dom";

const MainCarousel = ({ data }) => {
  const handleTransfer = (accCode) => {
    return (window.location.href = `/transfer?accCode=${accCode}`);
  }

  const LeftArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <ArrowBackIosNewIcon
        onClick={onClick}
        className={className}
        style={{ ...style, color: "#C8C8C8", fontSize: "2rem", left: "-50px" }}
      />
    );
  };
  const RightArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <ArrowForwardIosIcon
        onClick={onClick}
        className={className}
        style={{ ...style, color: "#C8C8C8", fontSize: "2rem", right: "-50px" }}
      />
    );
  };
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <LeftArrow />,
    nextArrow: <RightArrow />,
  };

  return (
    <Slider
      key={"key"}
      className="shadow-custom w-490 mx-auto rounded-20"
      {...settings}
    >
      {data.map((a, i) => {
        return (
          <div
            key={i}
            className="border-1 border-solid border-gray-border bg-white rounded-20 px-20 py-17 max-y-215"
          >
            <p className="text-black-900 text-16 font-semibold mb-10">
              {data[i].prodName}
            </p>
            <p className="text-gray-900 text-12 mb-10">
              {productTypeMapping[data[i].prodType]} {data[i].accCode}
            </p>
            <p className="text-black-900 text-26 font-extrabold mb-30">
              {data[i].accBalance.toLocaleString()}원
            </p>
            <div className="grid grid-cols-2 gap-x-15 justify-center mb-10">
              <MediumButton text={"조회하기"}></MediumButton>
              <MediumButton text={"이체하기"} sub={true} onClick={()=>{handleTransfer(data[i].accCode)}}></MediumButton>
            </div>
          </div>
        );
      })}
    </Slider>
  );
};

export default MainCarousel;
