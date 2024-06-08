import LongButton from "stories/atoms/longButton";

const BottomStickyButton = () => {
  return (    
      <div className="w-640 py-12 px-20 bg-gray-200 sticky bottom-0">
        <LongButton text={"가입 신청하기"} active={true}></LongButton>
      </div>
  );
};

export default BottomStickyButton;
