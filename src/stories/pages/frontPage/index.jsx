import { Link } from "react-router-dom";

const FrontPage = () => {
  return (
    <div className="temp_body w-screen h-screen px-40">
      <img className="mx-auto mb-70 w-400 relative" src="/assets/logo1.png" />
      <Link to={"/login"}>
        <button className="text-main-color font-semibold py-15 rounded-12 w-full bg-white mb-20 shadow-md">
          로그인
        </button>
      </Link>
      <Link to={"/identify"}>
        <button className="text-main-color font-semibold py-15 rounded-12 w-full bg-white shadow-md">
          회원가입
        </button>
      </Link>
      <div className="wave"></div>
      <div className="wave"></div>
      <div className="wave"></div>
    </div>
  );
};
export default FrontPage;

// className={`text-white font-semibold py-15 rounded-12 w-full ${active ? "bg-main-color cursor-pointer" : "bg-sub-color"}`}
