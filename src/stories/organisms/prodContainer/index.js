import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { images } from "constants/Icons";
import { Link } from "react-router-dom";
import ProdItem from "stories/atoms/prodItem";

const ProdContainer = ({ title, data, imgs, urls }) => {
  return (
    <div className="flex flex-col py-30 px-30 border border-gray-border bg-white shadow-custom rounded-20">
      <div className="flex justify-between mb-36">
        <span className="font-semibold text-18">{title}</span>
        <Link
          key={"1"}
          state={{ index: 0 }}
          to={"/product"}
          className="flex items-center text-gray-900 text-13 cursor-pointer"
        >
          확인하기
          <ArrowForwardIosIcon sx={{ fontSize: 14 }} />
        </Link>
      </div>
      <div className="flex justify-between">
        {data ? (
          data.map((menu, index) => (
            <div key={index}>
              <ProdItem
                title={menu}
                img={images[imgs[index]]}
                urls={urls[index]}
                index={index + 1}
              />
            </div>
          ))
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default ProdContainer;
