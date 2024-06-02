import { useGetAllAccount } from "hooks/queries/accountQueries";
import { useGetAllProduct } from "hooks/queries/productQueries";
import { usePostLogin } from "hooks/queries/userQueries";
import { $axios } from "libs/axios";
import React from "react";
import MainCarousel from "stories/molecules/mainCarousel";
import TotalAcc from "stories/molecules/totalAcc";
import ProdContainer from "stories/organisms/prodContainer";

const MainPage = () => {
  const data = [
    {
      accCode: "04-123425-786", // 계좌번호
      accBalance: 12342400, // 계좌잔액
      prodName: "자유 입출금 계좌", // 계좌(상품)이름
      prodType: "예금",
    },
    {
      accCode: "987-3455-1243", // 계좌번호
      accBalance: 12130000, // 계좌잔액
      prodName: "뱅크시보통예금", // 계좌(상품)이름
      prodType: "예금",
    },
  ];

  const data2 = {
    assets: 12123000,
  };

  const { data: allAccount, isLoading, error } = useGetAllAccount();
  console.log(allAccount);
  return (
    <div className="pb-20">
      <div className="ml-20 mb-14">
        <p className="text-18 font-extrabold">양삼식님</p>
      </div>
      <div className="mb-40">
        <MainCarousel data={data}></MainCarousel>
      </div>
      <div className="mb-30">
        <ProdContainer
          title={"마이메뉴"}
          data={["전체 계좌", "상품", "내 정보"]}
          imgs={[0, 1, 4]}
          urls={["/account", "/product", "/myInfo"]}
        ></ProdContainer>
      </div>
      <div className="mb-30">
        <TotalAcc
          data={data2}
          date={new Date().toLocaleTimeString()}
        ></TotalAcc>
      </div>
      <div className="flex flex-col py-20 px-20 border border-gray-border bg-white shadow-custom rounded-20 space-y-3">
        <p className="text-17 font-semibold">금융 상식 톡톡</p>
        <div className="flex justify-start space-x-3 border border-gray-border rounded-20 shadow-custom py-14 px-18">
          <img src="/assets/toktok1.svg" />
          <div className="flex flex-col space-y-1">
            <p className="text-16 font-semibold">
              은행에서도 보험 상품을 판매한다고?
            </p>
            <p className="text-12">내게 맞는 보험 찾기 {">"}</p>
          </div>
        </div>
        <div className="flex justify-start space-x-3 border border-gray-border rounded-20 shadow-custom py-14 px-18">
          <img src="/assets/toktok2.svg" />
          <div className="flex flex-col space-y-1">
            <p className="text-16 font-semibold">
              신용대출을 받을 때 꼭 알아야할 유의사항
            </p>
            <p className="text-12">내게 맞는 대출 찾기 {">"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MainPage;
