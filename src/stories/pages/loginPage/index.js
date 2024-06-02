import { Link } from "react-router-dom";
import Input from "stories/atoms/input";
import LongButton from "stories/atoms/longButton";

const LoginPage = () => {
  return (
    <div>
      <div className="font-semibold text-20 mb-20">로그인</div>
      <div className="grid grid-cols-1 gap-20">
        <Input placeholder={"아이디"} />
        <Input placeholder={"비밀번호"} />
      </div>
      <div className="flex flex-col justify-center items-center mt-10 absolute left-0 bottom-0 w-full px-40 mb-50">
        <LongButton text={"로그인"} active={false} />
        <div className="mt-10">
          아이디 찾기 | 비밀번호 찾기 | <Link to={"/join"}>회원가입</Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
