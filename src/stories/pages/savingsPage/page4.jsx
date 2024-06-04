import Input from "stories/atoms/input";
import LongButton from "stories/atoms/longButton";
import Title from "stories/atoms/title";
import HeaderBar from "stories/molecules/headerBar";

const Page4 = ({ moveNextPage, savingForm, setSavingForm }) => {
  const handleAmount = (e) => {
    setSavingForm((draft) => {
      draft.amount = e.target.value;
    });
  };
  return (
    <div>
      <HeaderBar text={"적금가입"} />
      <Title text1={"최초로 저축할 금액을 입력해주세요"} />
      <div className="mt-25">
        <Input placeholder={"10000"} onChange={handleAmount} />
      </div>
      <div className="flex flex-col justify-center items-center mt-10 absolute left-0 bottom-0 w-full px-40 mb-50">
        <LongButton
          text={"다음"}
          active={!!savingForm.amount}
          onClick={moveNextPage}
        />
      </div>
    </div>
  );
};

export default Page4;
