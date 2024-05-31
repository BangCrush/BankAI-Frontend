function TransferInfo({name,accNum,amount}) {
    return (<div>
        <p className="text-18 flex"><p className="font-bold">{name}</p>님 에게</p>
        <p className="text-14 text-gray-700 font-bold">뱅크시 {accNum}</p>
        <p className="text-18 flex"><p className="font-bold">{amount}원</p>을 이체하는 것이 맞나요?</p>
    </div>);
}

export default TransferInfo;