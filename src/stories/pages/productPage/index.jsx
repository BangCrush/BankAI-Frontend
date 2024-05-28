import React from "react";
import ProdButtons from "stories/molecules/prodButtons";
import SearchBar from "stories/molecules/searchBar";
import ProductList from "stories/organisms/productList";

const data = [
  {
    예금: [
      {
        prodCode: "1",
        prodName: "급여하나 통장",
        prodPromo: "월급통장 하나로 저축까지 똑똑하게",
        joinPeriod: "1년",
        prodRate: 5.85,
      },
      {
        prodCode: "2",
        prodName: "달달하나 통장",
        prodPromo: "급여이체 하나만으로 우대 금리받자",
        joinPeriod: "1년",
        prodRate: 3.85,
      },
    ],
  },
  {
    적금: [
      {
        prodCode: "1",
        prodName: "급여하나 적금통장",
        prodPromo: "월급통장 하나로 저축까지 똑똑하게",
        joinPeriod: "1년",
        prodRate: 2.85,
      },
      {
        prodCode: "2",
        prodName: "달달하나 적금통장",
        prodPromo: "급여이체 하나만으로 우대 금리받자",
        joinPeriod: "1년",
        prodRate: 1.85,
      },
    ],
  },
];
const ProductPage = () => {
  return (
    <>
      <div className="mb-24">
        <SearchBar placeholder={"어떤 상품을 찾으세요?"} />
      </div>
      <div className="mb-40">
        <ProdButtons />
      </div>
      <ProductList data={data} />
    </>
  );
};
export default ProductPage;
