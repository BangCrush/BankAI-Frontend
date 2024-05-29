import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { images } from "constants/Icons";
import ProdItem from "stories/atoms/prodItem";

const ProdContainer = ({ title, data }) => {
  return (
    <div className="flex flex-col py-30 px-20 border border-gray-border bg-white shadow-custom rounded-20">
      <div className="flex justify-between mb-36">
        <span className="font-semibold text-18">{title}</span>
        <div className="flex items-center text-gray-900 text-13 cursor-pointer">
          확인하기
          <ArrowForwardIosIcon sx={{ fontSize: 14 }}></ArrowForwardIosIcon>
        </div>
      </div>
      <div className="grid grid-cols-4">
        {data.map((menu, index) => (
          <ProdItem title={menu} img={images[index]} />
        ))}
      </div>
    </div>
  );
};

export default ProdContainer;
