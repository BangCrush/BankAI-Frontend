import React, { useState } from "react";
import LongButton from "stories/atoms/longButton";
import HeaderBar from "stories/molecules/headerBar";

const Page2 = ({ moveNextPage, mock }) => {
  const [dept, setDept] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, ""); // Ensure only numbers are input
    setDept(value);
  };

  return (
    <div className="flex flex-col bg-main-bg min-h-screen">
      <div className="px-40 pt-30 bg-white">
        <HeaderBar text={"대출가입"} />
      </div>

      <div className="flex flex-col p-40 h-full bg-main-bg space-y-5">
        <div className="bg-white rounded-12 border border-gray-border shadow-custom p-14 text-15">
          <div className="flex w-full p-10 justify-between items-center cursor-pointer">
            <div className="font-medium text-black-900">필요한 금액</div>
            <div className="flex items-center">
              <input
                className="text-20 outline-none text-right"
                onChange={handleInputChange}
                style={{ fontSize: "20px", width: `${dept.length + 20}ch` }}
              />
              <span className="text-20">원</span>
            </div>
          </div>
          <div className="flex w-full p-10 space-x-7 justify-end">
            <span className="text-gray-900 font-medium">
              {dept.toLocaleString()}원
            </span>
          </div>
        </div>
        <div className="bg-white rounded-12 border border-gray-border shadow-custom p-14 text-15">
          <div className="flex w-full p-10 space-x-7">
            <div className="font-medium text-black-900">상환방식</div>
            <span>{mock.prodRepay}</span>
          </div>
          <div className="flex w-full p-10 space-x-7">
            <div className="font-medium text-black-900">대출기간</div>
            <span>{mock.joinPeriod}</span>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center fixed left-0 bottom-0 w-full px-40 mb-50">
          <LongButton text={"다음"} active={true} onClick={moveNextPage} />
        </div>
      </div>
    </div>
  );
};

export default Page2;
