import Product from "../../molecules/product";

const ProductList = () => {
  return (
    <div className="grid gap-y-3 grid-cols-1 border border-gray-border px-20 py-30 rounded-20 ">
      <Product
        name={"급여하나 월복리 적급"}
        promotion={"월급 받고 이자 차곡"}
        period={"1년"}
        rate={5.85}
      />
      <Product
        name={"급여하나 월복리 적급"}
        promotion={"월급 받고 이자 차곡"}
        period={"1년"}
        rate={5.85}
      />
      <Product
        name={"급여하나 월복리 적급"}
        promotion={"월급 받고 이자 차곡"}
        period={"1년"}
        rate={5.85}
      />
      <Product
        name={"급여하나 월복리 적급"}
        promotion={"월급 받고 이자 차곡"}
        period={"1년"}
        rate={5.85}
      />
    </div>
  );
};

export default ProductList;
