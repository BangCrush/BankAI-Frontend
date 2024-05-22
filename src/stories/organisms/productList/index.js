import Product from "../../molecules/product";

const ProductList = ({ data }) => {
  return (
    <div className="grid gap-y-10 border border-gray-300 px-20 py-30 rounded-20">
      {data.map((product) => (
        <Product
          key={product.prodCode}
          name={product.prodName}
          promotion={product.prodPromo}
          period={product.joinPeriod}
          rate={product.prodRate}
        />
      ))}
    </div>
  );
};

export default ProductList;
