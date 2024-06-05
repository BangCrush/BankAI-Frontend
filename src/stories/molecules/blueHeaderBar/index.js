import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const BlueHeaderBar = ({ text, handleOpen }) => {
  return (
    <div className="flex justify-between w-full py-30 relative bg-sub-color px-50">
      <ArrowBackIosIcon className=""></ArrowBackIosIcon>
      <p className="text-16 text-center font-semibold">{text}</p>
      <span
        className="text-11 font-bold text-red-600 cursor-pointer"
        onClick={handleOpen}
      >
        계좌해지
      </span>
      {/* <MoreHorizIcon className=" text-main-color"></MoreHorizIcon> */}
    </div>
  );
};

export default BlueHeaderBar;
