import React from "react";
import ProdType from "stories/molecules/prodType";
import Product from "stories/molecules/product";

const ProductList = ({ data }) => {
  return (
    <>
      {data.map((item, itemIndex) => {
        const prodType = Object.keys(item)[0];
        const products = item[prodType];

        return (
          <div key={itemIndex}>
            <ProdType prodType={prodType} prodCount={products.length} />
            <div className="grid gap-y-10 bg-white border border-gray-300 px-20 pt-25 pb-20 rounded-20 mb-35">
              {products.map((product, index) => (
                <Product
                  key={product.prodCode}
                  name={product.prodName}
                  promotion={product.prodPromo}
                  period={product.joinPeriod}
                  rate={product.prodRate}
                  isLast={index === products.length - 1}
                />
              ))}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ProductList;
