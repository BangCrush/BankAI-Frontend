import { useGetAllProduct } from "hooks/queries/productQueries";
import React from "react";
import ProdButtons from "stories/molecules/prodButtons";
import SearchBar from "stories/molecules/searchBar";
import ProductList from "stories/organisms/productList";

const ProductPage = () => {
  const { data: allProducts, isLoading, error } = useGetAllProduct();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading data</div>;
  }

  console.log(allProducts);
  return (
    <>
      <div className="mb-24">
        <SearchBar placeholder={"어떤 상품을 찾으세요?"} />
      </div>
      <div className="mb-40">
        <ProdButtons />
      </div>
      <ProductList data={allProducts} />
    </>
  );
};
export default ProductPage;
