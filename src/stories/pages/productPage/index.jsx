import { useGetAllProduct, useGetSearchProducts, useGetSelectedProducts } from "hooks/queries/productQueries";
import React, { useState } from "react";
import ProdButtons from "stories/molecules/prodButtons";
import SearchBar from "stories/molecules/searchBar";
import ProductList from "stories/organisms/productList";

const ProductPage = () => {
  const [clicked, setClicked] = useState(0);
  const [searchWord, setSearchWord] = useState("");
  const { data: allProducts, isLoading, error } = useGetAllProduct();
  const { data: selectedProducts } = useGetSelectedProducts(clicked);
  const { data: searchedProducts } = useGetSearchProducts(searchWord);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading data</div>;
  }

  let productsToDisplay = null;
  if (clicked === 0) {
    productsToDisplay = allProducts;
  } else if (clicked === 5) {
    productsToDisplay = searchedProducts;
  } else {
    productsToDisplay = selectedProducts;
  }

  console.log(searchWord)
  console.log(clicked)

  return (
    <>
      <div className="mb-24">
        <SearchBar placeholder={"어떤 상품을 찾으세요?"} setSearchWord={setSearchWord} setClicked={setClicked}/>
      </div>
      <div className="mb-40">
        <ProdButtons clicked={clicked} setClicked={setClicked} />
      </div>
      {productsToDisplay && <ProductList data={productsToDisplay} />}
    </>
  );
};

export default ProductPage;