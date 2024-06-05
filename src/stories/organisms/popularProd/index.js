import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const PopularProd = ({ promotion, img }) => {
  return (
    <div className="flex justify-between border border-gray-border rounded-20 shadow-custom p-25 bg-white">
      <div className="flex flex-col">
        <div className="text-20 font-semibold mb-10">{promotion}</div>
        <div className="flex items-center text-gray-900 text-13">
          확인하기
          <ArrowForwardIosIcon sx={{ fontSize: 14 }}></ArrowForwardIosIcon>
        </div>
      </div>
      <img src="/assets/popular1.svg" />
    </div>
  );
};

export default PopularProd;
