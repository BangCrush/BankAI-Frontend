import LongButton from "stories/atoms/longButton";
import TransferInfo from "stories/molecules/transferInfo";

function TransferCheckPage({name,accNum,amount}) {
    return <div className="space-y-20 flex flex-col justify-center w-560">
    <TransferInfo name={name} accNum={accNum} amount={amount} />
    
    <LongButton text="확인" active={true} />

  </div>;
}

export default TransferCheckPage;