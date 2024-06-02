import { productTypeMapping } from "constants/products";
import React from "react";
import { Link } from "react-router-dom";
import ProdType from "stories/molecules/prodType";
import Product from "stories/molecules/product";

const ProductList = ({ data }) => {
  return (
    <>
      {Object.entries(data).map(([prodType, products], itemIndex) => (
        <div key={itemIndex}>
          <ProdType
            prodType={productTypeMapping[prodType]}
            prodCount={products.length}
          />
          <div className="grid gap-y-10 bg-white border border-gray-300 px-20 pt-25 pb-20 rounded-20 mb-35">
            {products.map((product, index) => (
              <Link
                to={`/product/${product.prodCode}`}
                key={product.prodCode}
                state={{ prodCode: product.prodCode }}
              >
                <Product
                  key={product.prodCode}
                  name={product.prodName}
                  promotion={product.prodPromo}
                  period={product.joinPeriod}
                  rate={product.prodRate}
                  isLast={index === products.length - 1}
                />
              </Link>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductList;
