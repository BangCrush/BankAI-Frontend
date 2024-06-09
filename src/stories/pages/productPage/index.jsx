import React, { useEffect, useState } from "react";
import ProdButtons from "stories/molecules/prodButtons";
import SearchBar from "stories/molecules/searchBar";
import ProductList from "stories/organisms/productList";
import {
  useGetAllProduct,
  useGetSearchProducts,
  useGetSelectedProducts,
} from "hooks/queries/productQueries";
import { useLocation } from "react-router-dom";
import HeaderBar from "stories/molecules/headerBar";

const ProductPage = () => {
  const [clicked, setClicked] = useState(0);
  const [searchWord, setSearchWord] = useState("");
  const {
    data: allProducts,
    isLoading: isLoadingAll,
    error: errorAll,
  } = useGetAllProduct();
  const {
    data: selectedProducts,
    isLoading: isLoadingSelected,
    error: errorSelected,
  } = useGetSelectedProducts(clicked);
  const {
    data: searchedProducts,
    isLoading: isLoadingSearched,
    error: errorSearched,
  } = useGetSearchProducts(searchWord);

  const location = useLocation();

  useEffect(() => {
    console.log(location.state.index);
    if (location.state && location.state.index !== undefined) {
      setClicked(location.state.index);
    }
  }, [location.state]);

  useEffect(() => {}, [allProducts, selectedProducts, searchedProducts]);

  if (isLoadingAll || isLoadingSelected || isLoadingSearched) {
    return <div>Loading...</div>;
  }

  if (errorAll || errorSelected || errorSearched) {
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

  return (
    <div className="pt-27 w-640 flex flex-col min-h-screen">
      <div className="px-40">
        <HeaderBar text={"상품"}></HeaderBar>
      </div>

      <div className="bg-main-bg px-54 pt-24 min-h-screen">
        <div className="mb-24">
          <SearchBar
            placeholder={"어떤 상품을 찾으세요?"}
            setSearchWord={setSearchWord}
            setClicked={setClicked}
          />
        </div>
        <div className="mb-40">
          <ProdButtons clicked={clicked} setClicked={setClicked} />
        </div>
        {productsToDisplay ? (
          <ProductList data={productsToDisplay} />
        ) : (
          <div>No products to display</div>
        )}
      </div>
    </div>
  );
};

export default ProductPage;
