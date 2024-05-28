import Input from "stories/atoms/input";
import LongButton from "stories/atoms/longButton";
import Title from "stories/atoms/title";
import HeaderBar from "stories/molecules/headerBar";

const IdentifyPage = () => {
  return (
    <div>
      <HeaderBar text={"본인인증"} />
      <Title text1={"이름을"} text2={"입력해주세요"} />
      <div className="mt-25">
        <Input placeholder={"이름"} />
      </div>
      <div className="flex flex-col justify-center items-center mt-10 fixed left-0 bottom-0 w-full px-40 mb-50">
        <LongButton text={"다음"} active={false} />
      </div>
    </div>
  );
};

export default IdentifyPage;
