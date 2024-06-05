import { useState } from "react";

const ProdBenefit = ({ data }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (isNaN(value)) {
      setInputValue("");
      return;
    }
    const rate = (data.prodRate * 10) / 1000;
    let finalAmount;

    if (data.prodAcc === "SIMPLE") {
      finalAmount = value * (1 + rate);
    } else if (data.prodAcc === "COMPOUND") {
      finalAmount = value * Math.pow(1 + rate / 12, 12);
    }

    setInputValue(Number(finalAmount.toFixed()).toLocaleString());
  };

  return (
    <div className="p-40">
      <div className="py-17">
        <p className="text-16 font-semibold">나의 예상 혜택</p>
        <div className="my-20 py-16 px-10 bg-gray-200 rounded-12">
          <div className="p-10 grid grid-cols-2">
            <div className="text-14 text-gray-950">만기금액</div>
            <div className="text-right text-17 font-extrabold here">
              {inputValue}원
            </div>
          </div>
          <div className="p-10 grid grid-cols-2">
            <div className="text-14 text-gray-950">적용금리</div>
            <div className="text-right text-17 font-extrabold">
              {data.prodRate}%
            </div>
          </div>
        </div>
        <p className="mb-20 text-16 font-semibold">
        {data.prodType === "SAVINGS" && "한 달에"}
          <input
            type="text"
            placeholder="1,000 "
            className="w-125 text-right placeholder:italic placeholder:text-right focus:outline-none"
            onChange={handleInputChange}
          />
          {data.prodType === "SAVINGS" ? "원 씩" : "원을"}
        </p>
        <p className="text-16 font-semibold">
          <span className="text-main-color">12개월</span> 동안 저축하기
        </p>
      </div>
    </div>
  );
};

export default ProdBenefit;
