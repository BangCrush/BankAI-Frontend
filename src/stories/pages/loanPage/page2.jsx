import React, { useState } from "react";
import LongButton from "stories/atoms/longButton";
import HeaderBar from "stories/molecules/headerBar";
import ErrorIcon from "@mui/icons-material/Error";
import { repayDescription, repaymentMapping } from "constants/products";
import RepayDesc from "stories/atoms/repayDesc";

const Page2 = ({ moveNextPage, mock }) => {
  const [dept, setDept] = useState("");
  const [showRepayDesc, setShowRepayDesc] = useState(false);

  const handleInputChange = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    setDept(value);
  };

  const calculateBullet = (rate) => {
    const monthlyRate = (rate * 10) / 12 / 100;
    return Math.round(dept * monthlyRate).toLocaleString();
  };

  const calculateEqualInstallment = (rate) => {
    const monthlyRate = (((rate * 10) / 12) * 1) / 1000;
    return Math.round(
      (dept * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -12)),
    ).toLocaleString();
  };

  const handleRepayDescToggle = () => {
    setShowRepayDesc(!showRepayDesc);
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
          <div className="flex w-full p-10 justify-end">
            <span className="text-gray-900 font-medium">
              {dept && parseInt(dept, 10).toLocaleString()}원
            </span>
          </div>
          {dept && (
            <div className="flex px-10 space-x-2">
              <ErrorIcon sx={{ fontSize: 20, color: "#4D4D4D" }} />
              <div>
                매월 예상 상환 금액은{" "}
                <span className="font-bold text-main-color">
                  {mock.prodRepay === "BULLET"
                    ? calculateBullet(mock.prodRateMthd)
                    : calculateEqualInstallment(mock.prodRateMthd)}
                  원
                </span>
                입니다.
              </div>
            </div>
          )}
        </div>
        <div className="bg-white rounded-12 border border-gray-border shadow-custom p-14 text-15">
          <div className="flex w-full p-10 space-x-7">
            <div className="font-medium text-black-900">상환방식</div>
            <div
              className="flex items-center space-x-2 cursor-pointer"
              onClick={handleRepayDescToggle}
            >
              <span className="underline">
                {repaymentMapping[mock.prodRepay]}{" "}
              </span>
              <ErrorIcon sx={{ fontSize: 20, color: "#BFBFBF" }} />
            </div>
          </div>
          {showRepayDesc && (
            <RepayDesc
              text1={repayDescription[mock.prodRepay].text1}
              text2={repayDescription[mock.prodRepay].text2}
            />
          )}
          <div className="flex w-full p-10 space-x-7">
            <div className="font-medium text-black-900">대출기간</div>
            <span>{mock.joinPeriod}</span>
          </div>
        </div>
        <div
          className="flex flex-col justify-center items-center fixed left-0 bottom-0 w-full px-40"
          style={{ bottom: "50px" }}
        >
          <LongButton text={"다음"} active={true} onClick={moveNextPage} />
        </div>
      </div>
    </div>
  );
};

export default Page2;
