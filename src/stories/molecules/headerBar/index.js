import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import SvgIcon from '@mui/material/SvgIcon';
import { Link } from "react-router-dom";
const HeaderBar = ({ text }) => {
  const handleBackClick = () => {
    if (window.location.pathname === "/myInfo") {
      window.location.href = "/main";
    } else {
      window.history.back();
    }
  };

  return (
    <div className="w-full h-48 py-7 relative bg-white mb-15">
      <ArrowBackIosIcon
        className="absolute left-0 cursor-pointer"
        onClick={handleBackClick}
      ></ArrowBackIosIcon>
      <p className="text-15 text-center">{text}</p>
      <Link to="/main">
        <SvgIcon className="absolute right-0 top-10 cursor-pointer">
          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </SvgIcon>
      </Link>
    </div>
  );
};

export default HeaderBar;
