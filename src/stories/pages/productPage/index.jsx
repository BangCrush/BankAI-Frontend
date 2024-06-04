import { useGetAllProduct, useGetSelectedProducts } from "hooks/queries/productQueries";
import React, { useState } from "react";
import ProdButtons from "stories/molecules/prodButtons";
import SearchBar from "stories/molecules/searchBar";
import ProductList from "stories/organisms/productList";

const ProductPage = () => {
  const [productType, setProductType] = useState(0);
  const { data: allProducts, isLoading, error } = useGetAllProduct();
  const { data: selectedProducts } = useGetSelectedProducts(productType);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading data</div>;
  }

  const productsToDisplay = productType === 0 ? allProducts : selectedProducts;

  console.log(productType);
  console.log(selectedProducts);

  return (
    <>
      <div className="mb-24">
        <SearchBar placeholder={"어떤 상품을 찾으세요?"} />
      </div>
      <div className="mb-40">
        <ProdButtons productType={productType} setProductType={setProductType} />
      </div>
      {productsToDisplay && <ProductList data={productsToDisplay} />}
    </>
  );
};

export default ProductPage;