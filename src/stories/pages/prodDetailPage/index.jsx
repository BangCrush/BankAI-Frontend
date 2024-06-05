import HeaderBar from "stories/molecules/headerBar";
import ProdDetailItem from "stories/molecules/prodDetailItem";
import ProdBenefit from "stories/organisms/prodBenefit";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useGetProductDetail } from "hooks/queries/productQueries";
import { productTypeMapping } from "constants/products";
import BottomStickyButton from "stories/molecules/bottomStickyButton";
import ProdBenefit2 from "stories/organisms/prodBenefit2";
import ProdBenefit3 from "stories/organisms/prodBenefit3";

const ProdDetailPage = () => {
  const location = useLocation();
  const {
    data: productData,
    isLoading,
    error,
  } = useGetProductDetail(location.state.prodCode);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const getLinkUrl = () => {
    switch (productData.prodType) {
      case "SAVINGS":
        return "/savings";
      case "DEPOSIT":
        return "/deposit";
      case "LOAN":
        return "/loan";
      case "CHECKING":
        return "/checking";
      default:
        return "/";
    }
  };

  return (
    <div className="w-full font-sans pt-30">
      <div className="px-40">
        <HeaderBar text={productTypeMapping[productData.prodType]}></HeaderBar>
      </div>
      <div className="bg-main-color px-30 py-35 text-20 font-semibold text-white">
        <p className="mb-40">{productData.prodPromo}</p>
        <p className="mb-40">{productData.prodName}</p>
        <p className="my-10">연(세전, 1년)</p>
        <p>최고 {productData.prodRate}%</p>
      </div>
      {productData &&
        (productData.prodType === "CHECKING" ? (
          <ProdBenefit2 />
        ) : productData.prodType === "LOAN" ? (
          <ProdBenefit3 />
        ) : (
          <ProdBenefit data={productData} />
        ))}
      <div className="bg-gray-200 px-40 pt-24 pb-62">
        <div className="py-17">
          <div className="beforesign mb-15">
            <p className="text-19 font-bold">가입 전 확인해 주세요!</p>
            <p className="text-16">{productData.prodCaution}</p>
          </div>
          <div className="flex flex-col space-y-4">
            <ProdDetailItem
              title={"상품특징"}
              content={productData.prodDesc}
            ></ProdDetailItem>
            <ProdDetailItem
              title={"가입대상"}
              content={productData.joinMember}
            ></ProdDetailItem>
            <ProdDetailItem
              title={"예금종류"}
              content={"정기예금"}
            ></ProdDetailItem>
            <ProdDetailItem title={"가입기간"} content={"1년"}></ProdDetailItem>
            <ProdDetailItem
              title={"가입금액"}
              content={productData.prodMin + " 이상 "}
            ></ProdDetailItem>
            <ProdDetailItem
              title={"이자지급방법"}
              content={"만기일시지급식: 만기(후) 해지시 원금과 함께 지급"}
            ></ProdDetailItem>
          </div>
        </div>
      </div>

      <Link
        to={getLinkUrl()}
        key={productData.prodCode}
        state={{
          prodCode: productData.prodCode,
          prodName: productData.prodName,
          prodMin: productData.prodMin,
        }}
      >
        <BottomStickyButton />
      </Link>
    </div>
  );
};

export default ProdDetailPage;
