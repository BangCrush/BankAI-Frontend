import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const ProdType = ({ prodType, prodCount }) => {
  return (
    <div className="flex justify-between mb-8 px-3">
      <div>
        <span className="text-16 font-semibold mr-6">{prodType}</span>
        <span className="text-16 text-main-color font-bold">{prodCount}</span>
      </div>
      <div className="flex items-center text-gray-900 text-12">
        확인하기
        <ArrowForwardIosIcon sx={{ fontSize: 12 }}></ArrowForwardIosIcon>
      </div>
    </div>
  );
};

export default ProdType;
