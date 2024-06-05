import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Slider from "react-slick";

const PopularProd = ({ promotion, imgs, data }) => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <Slider key={"key"} className="shadow-custom rounded-20" {...settings}>
      {data.map((item, index) => (
        <div
          key={index}
          className="border border-gray-border rounded-20 px-30 py-35 bg-white "
        >
          <div className="flex justify-between">
            <div className="flex flex-col ">
              <div className="text-20 font-semibold mb-10">
                {item.prodPromo}
              </div>
              <div className="flex items-center text-gray-900 text-13">
                확인하기
                <ArrowForwardIosIcon sx={{ fontSize: 14 }} />
              </div>
            </div>
            <img className="w-60" src={`/assets/${imgs[index]}.png`} />
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default PopularProd;
