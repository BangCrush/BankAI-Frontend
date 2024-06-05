import { useGetProductDetail } from "hooks/queries/productQueries";
import React from "react";
import LongButton from "stories/atoms/longButton";
import Title from "stories/atoms/title";
import HeaderBar from "stories/molecules/headerBar";

const Page4 = ({ moveNextPage, mock, prodMin, prodCode }) => {
  const { data: productData, isLoading, error } = useGetProductDetail(prodCode);

  return (
    <div className="flex flex-col bg-main-bg min-h-screen">
      <div className="px-40 pt-30 bg-white">
        <HeaderBar text={"대출가입"} />
        <div className="mb-25">
          <Title
            text1={"고객님의 예상한도와"}
            text2={"예상금리를 알려드립니다."}
          />
        </div>
      </div>

      <div className="p-40 h-full bg-main-bg">
        <div className="bg-white rounded-12 border border-gray-border shadow-custom p-14 text-15">
          <div className="flex justify-between items-center w-full p-10 ">
            <div className="font-medium text-black-900">대출 하한금액</div>
            <span className="font-semibold text-20">
              {productData.prodMin.toLocaleString()} 원
            </span>
          </div>
          <div className="flex justify-between items-center w-full p-10 ">
            <div className="font-medium text-black-900">대출 상한금액</div>
            <span className="font-semibold text-20">
              {productData.prodMax.toLocaleString()} 원
            </span>
          </div>
          <div className="flex justify-between items-center w-full p-10 ">
            <div className="font-medium text-black-900">대출금리</div>
            <span className="font-semibold text-20">
              <span className="font-extrabold text-main-color">
                {productData.prodRate}
              </span>
              %
            </span>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center absolute left-0 bottom-0 w-full px-40 mb-50">
          <LongButton text={"다음"} active={true} onClick={moveNextPage} />
        </div>
      </div>
    </div>
  );
};

export default Page4;
